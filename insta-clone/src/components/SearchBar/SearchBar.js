import React from "react";
import "./SearchBar.scss";
import styled from "styled-components";
import instagramLogo from "../Login/instagramLogo.png";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0px;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const InstaLogo = styled.div`
  padding: 0px 10px 0px 0px;
  border-right: 1px solid black;
`;

const InstagramTitle = styled.img`
  margin: 5px 0px 0px 10px;
  padding: 0;
  height: 60px;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
`;

class SearchBar extends React.Component {
  render() {
    return (
      <TopBar>
        <NavLeft>
          <InstaLogo>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </InstaLogo>
          <InstagramTitle src={instagramLogo} alt="instagram" />
        </NavLeft>

        <div className="navCener">
          <input
            type="text"
            onChange={this.props.searchFilter}
            name="search"
            placeholder="search"
          />
        </div>

        <NavRight>
          <FontAwesomeIcon icon={faCompass} size="3x" />

          <FontAwesomeIcon icon={faHeart} size="3x" />

          <FontAwesomeIcon icon={faUser} size="3x" />
        </NavRight>
      </TopBar>
    );
  }
}

export default SearchBar;
