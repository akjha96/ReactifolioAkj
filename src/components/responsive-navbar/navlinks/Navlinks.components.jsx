import React from "react";
import { Link } from "react-router-dom";

const Navlinks = props => {
  let tempTabIndex;
  if (props.isMobileLink) {
    tempTabIndex = "-1";
  }

  return (
    <div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="link" tabIndex={tempTabIndex}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link" tabIndex={tempTabIndex}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link" tabIndex={tempTabIndex}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
