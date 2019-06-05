import React from "react";
import "./SearchBar.scss";

class SearchBar extends React.Component {
  render() {
    return (
      <input
        type="text"
        onChange={this.props.searchFilter}
        name="search"
        // value={this.props.filtered}
        placeholder="search"
      />
    );
  }
}

export default SearchBar;
