import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <>
      <ul className="nav nav-links mx-auto">
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"} >
          <i class="fas fa-home"></i> About
        </Link>
      </li>

      <li className="nav-item">||</li>

      <li className="nav-item">
        <Link
          to="/portfolio"
          //ternary expression basically like say an if and else statement
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} >
          <i className="fas fa-archway"></i> Portfolio
        </Link>
      </li>

      <li className="nav-item">|| </li>

      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"} >
          <i class="fas fa-mail-bulk"></i> Contact
        </Link>
      </li>
    </ul>
    </>
  );
}

export default NavTabs;


// showing active tab based on URL "location.pathname" inside Link tag