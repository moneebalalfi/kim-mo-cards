import React, { Component } from "react";
import { logo1 } from "../assets/images";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-logobox">
          <img className="footer-logo" alt="logo" src={logo1} />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer-nav">
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="#!" className="footer-link">
                    Company
                  </a>
                  <a href="#!" className="footer-link">
                    Contact Us
                  </a>
                  <a href="#!" className="footer-link">
                    Carrers
                  </a>
                  <a href="#!" className="footer-link">
                    Privacy Policy
                  </a>
                  <a href="#!" className="footer-link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer-details">
              Built By{" "}
              <a href="#!" className="footer-link">
                Moneeb Alalfi
              </a>{" "}
              Copyright &copy; 2019
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
