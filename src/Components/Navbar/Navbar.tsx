import React, { Component } from "react";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faGrinBeam } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import logo from "./logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navigation-categories">
          <ul>
            <li className="black">
              Pantry <FontAwesomeIcon icon={faAngleDown} />
            </li>
            <li className="black">Whole Foods</li>
            <li className="green">New In</li>
            <li className="green">Best Sellers </li>
          </ul>
        </div>
        <div className="account-info">
          <div className="search-wrapper">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="login">
            <FontAwesomeIcon icon={faGrinBeam} />
          </div>
          <div className="favourites">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="cart">0</div>
        </div>
      </div>
    );
  }
}
