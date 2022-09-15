import React, { Component } from "react";
import { mainLogoSvg } from "../assets/images";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo-box">
          <img src={mainLogoSvg} alt="Logo" className="logo" />
        </div>

        <div className="text-box">
          <h1 className="heading">
            <span className="heading-main">KiM-Mo Cards</span>
            <span className="heading-sub">Just be Happy</span>
          </h1>

          <a href="#" className="btn btn-white btn-animated">
            Sign Up!
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
