import React, { Component } from "react";
// style
import "../styles/css/Page.css";

import treeTrunk_2400w from "../images/treeTrunk_2400w.png";
import treeTrunk_1920w from "../images/treeTrunk_1920w.png";
import treeTrunk_640w from "../images/treeTrunk_640w.png";
import treesSnow_2400w from "../images/treesSnow_2400w.jpg";
import treesSnow_1920w from "../images/treesSnow_1920w.png";
import treesSnow_640w from "../images/treesSnow_640w.png";
import treesTall_2400w from "../images/treesTall_2400w.png";
import treesTall_1920w from "../images/treesTall_1920w.png";
import treesTall_640w from "../images/treesTall_640w.png";

import brave from "../images/bravey.png";
import zebramix from "../images/zebby.png";

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <div className="container">
          <div className="item">
            <img
              src={treeTrunk_640w}
              srcSet={`${treeTrunk_2400w} 2400w, ${treeTrunk_1920w} 1920w, ${treeTrunk_640w} 640w`}
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
              src={treesSnow_640w}
              srcSet={`${treesSnow_2400w} 2400w, ${treesSnow_1920w} 1920w, ${treesSnow_640w} 640w`}
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
              src={treesTall_640w}
              srcSet={`${treesTall_2400w} 2400w, ${treesTall_1920w} 1920w, ${treesTall_640w} 640w`}
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
