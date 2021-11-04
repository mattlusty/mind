import React, { Component } from "react";
// style
import "../styles/css/Nav.css";

//
// import brain from "../images/brain.png";
// components
import NavSearch from "./NavSearch";
import NavProfile from "./NavProfile";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="nav">
          <div className="menuToggle icon">
            <i className="mai-menu"></i>
          </div>
          {/* <img className="logo" src={brain} alt="brain" /> */}
          <div className="logoName">iMind</div>
          <NavSearch />
          <div className="navMenu">
            <ul>
              <li>About</li>
              <li>Vote</li>
              <li>Pitch</li>
              <li>Invest</li>
            </ul>
          </div>
          <NavProfile />
        </div>
      </div>
    );
  }
}

export default Nav;
