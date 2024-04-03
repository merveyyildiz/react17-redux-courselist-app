import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink
        to="/"
        exact
        activeStyle={activeStyle}
        className="text-decoration-none"
      >
        Home
      </NavLink>
      {" | "}
      <NavLink
        to="/about"
        activeStyle={activeStyle}
        className="text-decoration-none"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Header;
