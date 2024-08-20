import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster1: {
        name: "Frankenstein",
      },
      monster2: {
        name: "Dracula",
      },
      monster3: {
        name: "Zombie",
      },
    };
  }

  changeName() {
    // is happening asynchronously thats why even if we console.log(this.state)
    // after this line, it will still show the old state
    //
    // react batches these state updates so it can calculate the
    // minimum number of changes to the DOM
    // this.setState({ name: { firstNanme: "Yel", lastName: "Padillo" } });

    // to fix this, we can pass a callback function to this.setState
    // first function is the state update
    // second function is the callback function
    this.setState(
      () => {
        return { name: { firstNanme: "Yel", lastName: "Padillo" } };
      },
      () => {
        // this function only fires once **ALL** update is done
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1>
      </div>
    );
  }
}

export default App;
