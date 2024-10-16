import { useState, useEffect } from "react";

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
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // useEffect allows us to fetch data
  // without causing an infinite loop
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []); // use effect will only run once when there's no dependencies

  useEffect(() => {
    const filtered = searchField
      ? monsters.filter((monster) =>
          monster.name.toLowerCase().includes(searchField)
        )
      : monsters;

    setFilteredMonsters(filtered);
  }, [searchField, monsters]);
  // useEffect simalarily works like vue watcher.

  const onSearchChange = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchField(search);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchInputComponent onSearchChange={onSearchChange} />
      <CardListComponent monsters={filteredMonsters} />
    </div>
  );
};

export default App;
