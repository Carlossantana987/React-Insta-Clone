import React from "react";
import "./SearchBar.scss";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="topBar">
        <div className="logo">
          <FontAwesomeIcon icon={faInstagram} /> | Instagram
        </div>
        <input
          type="text"
          onChange={this.props.searchFilter}
          name="search"
          placeholder="search"
        />
        <div className="navIcon">
          <FontAwesomeIcon icon={faCompass} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
