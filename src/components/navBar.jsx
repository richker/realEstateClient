import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoIcon from "../assets/img/logoIcon.jpeg"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img alt="" src={logoIcon} height={40} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/predict">
            Predict
          </NavLink>
          <NavLink className="nav-item nav-link" to="/data">
            Our Data
          </NavLink>
            <NavLink className="nav-item nav-link" to="/models">
               Models
            </NavLink>
          <NavLink className="nav-item nav-link" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
