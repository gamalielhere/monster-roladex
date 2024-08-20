import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  // lifecycle method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  // changeName() {
  //   // is happening asynchronously thats why even if we console.log(this.state)
  //   // after this line, it will still show the old state
  //   //
  //   // react batches these state updates so it can calculate the
  //   // minimum number of changes to the DOM
  //   // this.setState({ name: { firstNanme: "Yel", lastName: "Padillo" } });

  //   // to fix this, we can pass a callback function to this.setState
  //   // first function is the state update
  //   // second function is the callback function
  //   this.setState(
  //     () => {
  //       return { name: { firstNanme: "Yel", lastName: "Padillo" } };
  //     },
  //     () => {
  //       // this function only fires once **ALL** update is done
  //       console.log(this.state);
  //     }
  //   );
  // }

  render() {
    return (
      <div className="App">
        {this.state.monsters.length > 0 ? (
          this.state.monsters.map((monster, idx) => (
            <div key={idx + monster.id}>
              <h1>{monster.name}</h1>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
