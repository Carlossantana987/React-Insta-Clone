import React from "react";
import "./App.scss";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  state = {
    data: [],
    filteredPosts: []
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.setState({ data: dummyData });
  }
  searchFilter = e => {
    const filtered = this.state.data.filter(post =>
      post.username.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ filteredPosts: filtered });
  };

  render() {
    return (
      <div className="app">
        <header className="searchBar">
          <SearchBar
            newSearch={this.state.search}
            searchFilter={this.searchFilter}
          />
        </header>

        <div className="postContainer">
          <PostContainer
            data={this.state.data}
            filteredPosts={this.state.filteredPosts}
            searchFilter={this.searchFilter}
          />
        </div>
      </div>
    );
  }
}
export default App;
