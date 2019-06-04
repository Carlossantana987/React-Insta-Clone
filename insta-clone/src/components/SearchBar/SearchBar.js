import React from "react";

const SearchBar = () => {
  return (
    <div className="searchBarComp">
      <div className="mainTitle">
        <img
          src="/static/bundles/es6/sprite_glyphs_c8c6b3ac563b.png/c8c6b3ac563b.png)"
          alt="insta-logo"
        />
        Instagram{" "}
      </div>
      <form>
        <input className="searchbar" type="text" placeholder="Search" />
      </form>
      <div className="navIcon">compass heart person</div>
    </div>
  );
};

export default SearchBar;
