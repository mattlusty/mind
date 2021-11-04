import React, { Component } from "react";
// style
import "../styles/css/Page.css";

import brave from "../images/bravey.png";
import zebramix from "../images/zebby.png";

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <div className="container">
          <div className="item item1">
            <img src={brave} />
          </div>
          <div className="item item2">
            <img src={zebramix} />
          </div>
          <div className="item item3">
            <img src={brave} />
          </div>
          <div className="item item4">
            <img src={zebramix} />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
