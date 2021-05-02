import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import searchIcon from "@iconify/icons-bi/search";
import heartLine from "@iconify/icons-clarity/heart-line";
import smileyIcon from "@iconify/icons-codicon/smiley";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./Navbar.css";

function Navbar() {
  const [search, setSearch] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleSubmit = () => {};

  return (
    <div className="navbar">
      <div className="company-logo">
        <Link to="/">
          <img src={logo} alt="company-logo" />
        </Link>
      </div>
      <div className="navigation-categories">
        <ul>
          <li className="pantry black">
            Pantry <FontAwesomeIcon icon={faChevronDown} />
          </li>
          <li className="purple">Whole Foods</li>
          <li className="green">New In</li>
          <li className="green">Best Sellers </li>
        </ul>
      </div>
      <div className="account-info">
        <div
          className="search-wrapper"
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <div className="search-icon">
            <Icon icon={searchIcon} />
          </div>
          {isActive && (
            <div className="search-bar">
              <form onSubmit={handleSubmit} id="search-form">
                <label htmlFor="search-input" className="submit">
                  Search
                </label>
                <input
                  value={search}
                  type="text"
                  placeholder="Search"
                  id="search-input"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="submit"></button>
              </form>
            </div>
          )}
        </div>
        <div className="login">
          <Link to="/login">
            <Icon icon={smileyIcon} />
          </Link>
        </div>
        <div className="favourites">
          <Link to="/wishlist">
            <Icon icon={heartLine} />
          </Link>
        </div>
        <div className="cart">0</div>
      </div>
    </div>
  );
}

export default Navbar;
