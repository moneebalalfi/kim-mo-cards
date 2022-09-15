import React, { Component } from "react";
import { per1Img, per2Img } from "../assets/images";

class Popup extends Component {
  render() {
    return (
      <div className="popup" id="popup">
        <div className="popup-box">
          <div className="popup-box-images">
            <img src={per1Img} alt="1" className="popup-box-images-img" />
            <img src={per2Img} alt="2" className="popup-box-images-img" />
          </div>
          <div className="popup-box-texts">
            <a href="#team-section" className="popup-box-texts-close">
              <i className="fa fa-times"></i>
            </a>
            <h2 className="unique-heading popup-box-texts-h2">
              Start Buying now!
            </h2>
            <h3 className="h3 margin-bottom-med">
              Important &ndash; Please read this terms before buying!
            </h3>
            <p className="popup-box-texts-text">
              here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by
              injectesdsdd humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum. here are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum. here are many variations of.
            </p>
            <a href="" className="btn btn-green">
              Book Now
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
