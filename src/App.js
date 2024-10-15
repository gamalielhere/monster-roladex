import { useState } from "react";

import "./App.css";
import CardListComponent from "./components/card-list/CardListComponent";
import SearchInputComponent from "./components/search-input/SearchInputComponent";

// pure functions return the same output given the same input

// impure finctions can have side effects
// react hooks makes pure functions impure

// functional component
// receives props as arguments
// and returns JSX
const App = () => {
  // state
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState([]);

  // fetch
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));

  const onSearchChange = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchField(search);
  };

  const filtered = searchField
    ? monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchField)
      )
    : monsters;

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchInputComponent onSearchChange={onSearchChange} />
      <CardListComponent monsters={filtered} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   // lifecycle method
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   // changeName() {
//   //   // is happening asynchronously thats why even if we console.log(this.state)
//   //   // after this line, it will still show the old state
//   //   //
//   //   // react batches these state updates so it can calculate the
//   //   // minimum number of changes to the DOM
//   //   // this.setState({ name: { firstNanme: "Yel", lastName: "Padillo" } });

//   //   // to fix this, we can pass a callback function to this.setState
//   //   // first function is the state update
//   //   // second function is the callback function
//   //   this.setState(
//   //     () => {
//   //       return { name: { firstNanme: "Yel", lastName: "Padillo" } };
//   //     },
//   //     () => {
//   //       // this function only fires once **ALL** update is done
//   //       console.log(this.state);
//   //     }
//   //   );
//   // }

//   // create a function outside of the render
//   // so the function doesn't get rendered over
//   // and over when the component is rendered
//   onSearchChange = (e) => {
//     this.setState(() => {
//       return { searchField: e.target.value };
//     });
//   };

//   render() {
//     // destructure so its easier to read
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const monstersCopy = monsters.slice();
//     const filtered = monstersCopy.filter((monster) => {
//       return searchField
//         ? monster.name.toLowerCase().includes(searchField.toLowerCase())
//         : monster;
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchInputComponent onSearchChange={onSearchChange} />
//         <CardListComponent monsters={filtered} />
//       </div>
//     );
//   }
// }

export default App;
