import React from "react";
import "./App.scss";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    <div className="app">
      <header className="searchBar">
        <SearchBar />
      </header>

      <div className="postContainer">
        <PostContainer data={this.state.data} />
      </div>
    </div>;
  }
}
export default App;
