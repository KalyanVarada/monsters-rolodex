import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    console.log("b1 clicked");
  }

  handleClick3 = () => console.log("b3 clicked");

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((u) => this.setState({ monsters: u }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMosters = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        ></SearchBox>
        <CardList monsters={filteredMosters}></CardList>
      </div>
    );
  }
}

export default App;
