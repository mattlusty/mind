import React, { Component } from "react";
// style
import "../styles/css/Page.css";

import treeTrunk_2500 from "../images/treeTrunk_2500.jpg";
import treeTrunk_1500 from "../images/treeTrunk_1500.jpg";
import treeTrunk_500 from "../images/treeTrunk_500.jpg";
import treesSnow_2500 from "../images/treesSnow_2500.jpg";
import treesSnow_1500 from "../images/treesSnow_1500.jpg";
import treesSnow_500 from "../images/treesSnow_500.jpg";
import treesTall_2500 from "../images/treesTall_2500.jpg";
import treesTall_1500 from "../images/treesTall_1500.jpg";
import treesTall_500 from "../images/treesTall_500.jpg";

import brave from "../images/bravey.png";
import zebramix from "../images/zebby.png";

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <div className="container">
          <div className="item">
            <img
              src={treeTrunk_500}
              srcSet={`${treeTrunk_2500} 2500w, ${treeTrunk_1500} 1500w, ${treeTrunk_500} 500w`}
              sizes="(max-width: 710px) 100vw, 50%"
              alt="thing"
            />
            <div className="content">
              <div className="inner">
                <h1>Brave New World</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                  enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                  alias tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis
                  consequatur commodi enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum
                  recusandae et odio numquam alias tenetur.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <img
              src={treesSnow_500}
              srcSet={`${treesSnow_2500} 2500w, ${treesSnow_1500} 1500w, ${treesSnow_500} 500w`}
              sizes="(max-width: 710px) 100vw, 25vw"
              alt="thing"
            />
            <div className="content">
              <div className="inner">
                <h1>Bring Back the Zelephants</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                  enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                  alias tenetur.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <img
              src={treesTall_500}
              srcSet={`${treesTall_2500} 2500w, ${treesTall_1500} 1500w, ${treesTall_500} 500w`}
              sizes="(max-width: 710px) 100vw, 25vw"
              alt="thing"
            />
            <div className="content">
              <div className="inner">
                <h1>Brave New World</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                  enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                  alias tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis
                  consequatur commodi enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum
                  recusandae et odio numquam alias tenetur.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={zebramix} alt="thing" />
            <div className="content">
              <div className="inner">
                <h1>Bring Back the Zelephants</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                  enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                  alias tenetur.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={brave} alt="thing" />
            <div className="content">
              <div className="inner">
                <h1>Brave New World</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                  enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                  alias tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis
                  consequatur commodi enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum
                  recusandae et odio numquam alias tenetur.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={zebramix} alt="thing" />
            <div className="content">
              <div className="inner">
                <h1>Bring Back the Zelephants</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                  enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                  alias tenetur.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={brave} alt="thing" />
            <div className="content">
              <div className="inner">
                <h1>Brave New World</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                  enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                  alias tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis
                  consequatur commodi enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum
                  recusandae et odio numquam alias tenetur.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={zebramix} alt="thing" />
            <div className="content">
              <div className="inner">
                <h1>Bring Back the Zelephants</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                  enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                  alias tenetur.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={brave} alt="thing" />
            <div className="content">
              <div className="inner">
                <h1>Brave New World</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                  enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                  alias tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis
                  consequatur commodi enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum
                  recusandae et odio numquam alias tenetur.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={zebramix} alt="thing" />
            <div className="content">
              <div className="inner">
                <h1>Bring Back the Zelephants</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                  enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                  alias tenetur.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={brave} alt="thing" />
            <div className="content">
              <div className="inner">
                <h1>Brave New World</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                  enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                  alias tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis
                  consequatur commodi enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum
                  recusandae et odio numquam alias tenetur.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={zebramix} alt="thing" />
            <div className="content">
              <div className="inner">
                <h1>Bring Back the Zelephants</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error perspiciatis consequatur commodi
                  enim ipsam, sapiente neque laborum, ad repellat explicabo non officia eum recusandae et odio numquam
                  alias tenetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
