import { Component } from "react";
import { menuIcon } from "../assets/images";

class Navpage extends Component {
  render() {
    return (
      <div className="navpage">
        <input type="checkbox" id="nav-page" className="navpage-checkbox" />

        <label htmlFor="nav-page" className="navpage-button">
          <img src={menuIcon} alt="menu" className="navpage-button-icon" />
        </label>

        <div className="navpage-bg"></div>

        <nav className="nav navpage-nav">
          <ul className="nav-list navpage-nav-list">
            <li className="nav-item">
              <a href="#!" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link">
                Popular Cards
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navpage;
