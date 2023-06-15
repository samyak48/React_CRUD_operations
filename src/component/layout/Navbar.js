import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
        <div className="container-fluid">
          <a className="navbar-brand p-3 mb-2 bg-warning text-dark" href="#">
            Sam Production
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active act"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/user/add" className="btn btn btn-success w-20">
            Add User
          </NavLink>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
