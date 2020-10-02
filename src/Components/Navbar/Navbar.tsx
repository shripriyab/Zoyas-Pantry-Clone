import React, { Component } from "react";

import "./Navbar.css";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-bi/search";
import smileyIcon from "@iconify/icons-codicon/smiley";
import heartLine from "@iconify/icons-clarity/heart-line";

import logo from "./logo.svg";

interface NavbarProps {}

interface NavbarState {
  search: string;
  isSearchActive: boolean;
}

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    this.state = {
      search: "",
      isSearchActive: false,
    };
  }

  toggleSearchBar = (bool: boolean) => {
    this.setState({
      isSearchActive: bool,
    });
  };

  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSubmit = () => {};

  render() {
    const { search, isSearchActive } = this.state;
    return (
      <div className="navbar">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="navigation-categories">
          <ul>
            <li className="pantry black">
              Pantry <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li className="black">Whole Foods</li>
            <li className="green">New In</li>
            <li className="green">Best Sellers </li>
          </ul>
        </div>
        <div className="account-info">
          <div
            className="search-wrapper"
            onMouseEnter={() => this.toggleSearchBar(true)}
            onMouseLeave={() => this.toggleSearchBar(false)}
          >
            <div className="search-icon">
              <Icon icon={searchIcon} />
            </div>
            {isSearchActive && (
              <div className="search-bar">
                <form onSubmit={this.handleSubmit} id="search-form">
                  <label htmlFor="search-input" className="submit">
                    Search
                  </label>
                  <input
                    value={search}
                    type="text"
                    placeholder="Search"
                    id="search-input"
                    onChange={this.handleSearch}
                  />
                  <button type="submit" className="submit"></button>
                </form>
              </div>
            )}
          </div>
          <div className="login">
            <Icon icon={smileyIcon} />
          </div>
          <div className="favourites">
            <Icon icon={heartLine} />
          </div>
          <div className="cart">0</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
