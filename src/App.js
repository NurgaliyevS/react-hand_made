import React, { Component } from "react";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Redux example</h1>
        <Counter />
      </div>
    );
  }
}

export default App;