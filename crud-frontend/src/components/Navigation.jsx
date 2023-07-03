import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/allcampuses">CAMPUSES</Link>
          </li>
          <li>
            <Link to="/allstudents">STUDENTS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
