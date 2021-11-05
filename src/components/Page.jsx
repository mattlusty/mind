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
            <img src={brave} alt="thing" />
            <div className="content">
              <h1>Brave New World</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                alias tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis
                consequatur commodi enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae
                et odio numquam alias tenetur.
              </p>
            </div>
          </div>
          <div className="item item2">
            <img src={zebramix} alt="thing" />
            <div className="content">
              <h1>Bring Back the Zelephants</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                alias tenetur.
              </p>
            </div>
          </div>
          <div className="item item3">
            <img src={brave} alt="thing" />
          </div>
          <div className="item item4">
            <img src={zebramix} alt="thing" />
          </div>
          <div className="item item1">
            <img src={brave} alt="thing" />
          </div>
          <div className="item item2">
            <img src={zebramix} alt="thing" />
          </div>
          <div className="item item3">
            <img src={brave} alt="thing" />
          </div>
          <div className="item item4">
            <img src={zebramix} alt="thing" />
          </div>
          <div className="item item3">
            <img src={brave} alt="thing" />
          </div>
          <div className="item item4">
            <img src={zebramix} alt="thing" />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
