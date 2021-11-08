import React, { Component } from "react";
//
import "../styles/css/NavSearch.css";

class NavSearch extends Component {
  render() {
    return (
      <div className="NavSearch">
        <div className="search flex-center">
          {/* <div className="icon shad-hov"> */}
          <i className="mai-search"></i>
          <div className="search-text"></div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default NavSearch;
