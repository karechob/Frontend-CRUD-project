import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/community.png";

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li className="img-container">
            <img className="logo" src={logo} alt="holding hands logo" />
            Campus Search
          </li>
        </ul>
        <ul className="btns-nav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/campuses">CAMPUSES</Link>
          </li>
          <li>
            <Link to="/students">STUDENTS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
