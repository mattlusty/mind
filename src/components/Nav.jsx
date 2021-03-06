import React, { Component } from "react";
// style
import "../styles/css/Nav.css";

//
import tree from "../images/treelogo.png";
// components
import NavSearch from "./NavSearch";
import NavProfile from "./NavProfile";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="nav">
          <div className="leftMenu">
            <div className="menuToggle">
              <i className="mai-menu"></i>
            </div>
          </div>
          <div className="logo-wrapper">
            <img className="logo" width="200" height="200" src={tree} alt="tree" />
            <div className="logoName">iMind</div>
          </div>
          <div className="rightMenu">
            <ul className="navMenu">
              <li>About</li>
              <li>Vote</li>
              <li>Pitch</li>
              <li>Invest</li>
            </ul>
            <NavSearch />
            <NavProfile />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
