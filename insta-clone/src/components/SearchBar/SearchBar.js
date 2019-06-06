import React from "react";
import "./SearchBar.scss";
import instagramLogo from "../Login/instagramLogo.png";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="topBar">
        <div className="navLeft">
          <div className="instaLogo">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <img src={instagramLogo} alt="instagram" />
        </div>

        <div className="navCener">
          <input
            type="text"
            onChange={this.props.searchFilter}
            name="search"
            placeholder="search"
          />
        </div>

        <div className="navRight">
          <div className="icon">
            <FontAwesomeIcon icon={faCompass} size="3x" />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faHeart} size="3x" />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUser} size="3x" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
