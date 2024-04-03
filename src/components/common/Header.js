import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav className="navbar navbar-expand-md border-bottom mb-4 navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold">
          Courses
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex">
            <NavLink
              to="/"
              exact
              activeStyle={activeStyle}
              className="nav-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Courses
            </NavLink>
            <NavLink to="/about" activeStyle={activeStyle} className="nav-link">
              About
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
