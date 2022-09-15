import React, { Component } from "react";
import { aboutImg1, aboutImg2, aboutImg3 } from "../assets/images";

class About extends Component {
  render() {
    return (
      <section className="about-section" id="about">
        <div className="text-center">
          <div className="margin-bottom-big">
            <h2 className="unique-heading">
              The standard Lorem Ipsum passage, used since the 1500s
            </h2>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h3 className="h3 margin-bottom-small">
                tempor incididunt ut labore et dolore magna aliqua.
              </h3>
              <p className="paragraph">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut.
              </p>

              <h3 className="h3 margin-bottom-small">
                Lsed voluptates delectus cupiditate
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                impedit est sed voluptates delectus cupiditate soluta saepe
                consequuntur sapiente minima.
              </p>
              <a href="#!" className="btn about-button">
                Read More! <i className="fa fa-caret-right fa-lg"></i>
              </a>
            </div>

            <div className="col-1-of-2">
              <div className="images-group">
                <img
                  src={aboutImg1}
                  alt="Photo 1"
                  className="image image-img1"
                />
                <img
                  src={aboutImg2}
                  alt="Photo 2"
                  className="image image-img2"
                />
                <img
                  src={aboutImg3}
                  alt="Photo 3"
                  className="image image-img3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
