import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import searchIcon from "@iconify/icons-bi/search";
import heartLine from "@iconify/icons-clarity/heart-line";
import smileyIcon from "@iconify/icons-codicon/smiley";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pantryList } from "../../data";
import Button from "../Button";
import CartDrawer from "../Drawer";
import logo from "./logo.svg";
import "./Navbar.css";

function Navbar() {
  const [search, setSearch] = useState<string>("");
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [isPantryActive, setIsPantryActive] = useState<boolean>(false);
  const [isLoginActive, setIsLoginActive] = useState<boolean>(false);
  const [isCartActive, setIsCartActive] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {};

  const pantryClass = isPantryActive
    ? "pantry purple pantry-open"
    : "pantry purple";

  const overlayClass =
    isPantryActive || isLoginActive || isCartActive
      ? "overlay overlay-active navbar-active"
      : isSearchActive
      ? "search-overlay overlay overlay-active"
      : "overlay";

  return (
    <>
      <div className={overlayClass}></div>
      <div className="navbar">
        <div className="company-logo">
          <Link to="/">
            <img src={logo} alt="company-logo" />
          </Link>
        </div>
        <div className="navigation-categories">
          <ul>
            <li
              className={pantryClass}
              onMouseEnter={() => setIsPantryActive(true)}
              onMouseLeave={() => setIsPantryActive(false)}
            >
              <span>
                Pantry <FontAwesomeIcon icon={faChevronDown} />
              </span>
              {isPantryActive && (
                <div className="pantry-dropdown">
                  {pantryList.map(({ option, optionIcon }) => (
                    <div className="pantry-option purple" key={option}>
                      <span>
                        <img
                          src={`./assets//${optionIcon}.svg`}
                          className="pantry-option-icon"
                          alt="Pantry option"
                        ></img>
                        {option}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li className="purple">
              <span>Whole Foods</span>
            </li>
            <li className="green">
              <span>New In</span>
            </li>
            <li className="green">
              <span>Best Sellers</span>
            </li>
          </ul>
        </div>
        <div className="account-info">
          <div
            className="search-wrapper"
            onMouseEnter={() => setIsSearchActive(true)}
            onMouseLeave={() => setIsSearchActive(false)}
          >
            <div className="search-icon">
              <Icon icon={searchIcon} />
            </div>
            {isSearchActive && (
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
          <div
            className="login"
            onMouseEnter={() => setIsLoginActive(true)}
            onMouseLeave={() => setIsLoginActive(false)}
          >
            <Link to="/login">
              <Icon icon={smileyIcon} />
            </Link>
            {isLoginActive && (
              <div className="nav-login-dropdown">
                <div className="nav-login-title">
                  <p>Login to your</p>
                  <p>Zoya's Pantry Account</p>
                </div>
                <form id="nav-login-form">
                  <div className="login-username">
                    <label htmlFor="nav-login-email" className="user-details">
                      Email address *
                    </label>
                    <input
                      value={email}
                      type="text"
                      id="nav-login-email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="login-password">
                    <label
                      htmlFor="nav-login-password"
                      className="user-details"
                    >
                      Password *
                    </label>
                    <input
                      value={password}
                      type="password"
                      id="nav-login-password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="forgot font-bold">
                      <Link to="/my-account/forgot-passsword">
                        Forgot password
                      </Link>
                    </div>
                  </div>
                  <div className="nav-login-create-account">
                    <Link to="/register">
                      <span>Create an account</span>
                    </Link>
                  </div>
                  <Button link={"#"} text={"Login"} width={340} />
                </form>
              </div>
            )}
          </div>
          <div className="favourites">
            <Link to="/wishlist">
              <Icon icon={heartLine} />
            </Link>
          </div>
          <div
            className="cart"
            onMouseEnter={() => setIsCartActive(true)}
            onMouseLeave={() => setIsCartActive(false)}
          >
            <Link to="/cart">0</Link>
            {isCartActive && <CartDrawer />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
