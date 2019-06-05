import React from "react";
import "./App.scss";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    return (
      <div className="app">
        <header className="searchBar">
          <SearchBar />
        </header>

        <div className="postContainer">
          <PostContainer post={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
