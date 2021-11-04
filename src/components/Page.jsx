import React, { Component } from "react";
// style
import "../styles/css/Page.css";

// import brain from "../images/brave.png";

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <div className="container">
          <div className="item1">{/* <img src="../images/brave.png"  */}</div>
          <div className="item2"></div>
          <div className="item3"></div>
          <div className="item4"></div>
        </div>
      </div>
    );
  }
}

export default Page;
