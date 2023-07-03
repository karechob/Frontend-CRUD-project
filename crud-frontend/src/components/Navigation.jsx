import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allcampuses">Campuses</Link>
          </li>
          <li>
            <Link to="/allstudents">Students</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
