import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchBarComp">
      <div className="mainTitle">
        <img src="instagramlogo.jpg" alt="insta-logo" />
        Instagram
      </div>
      <form>
        <input className="searchbar" type="text" placeholder="Search" />
      </form>
      <div className="navIcon">compass heart person</div>
    </div>
  );
};

export default SearchBar;
