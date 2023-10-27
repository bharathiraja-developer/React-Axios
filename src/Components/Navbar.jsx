import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          React Axios Project
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 mt-2 fw-medium">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#!"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Create" className="nav-link" href="#!">
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Edit" className="nav-link" href="#!">
                Edit
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Delete" className="nav-link" href="#!">
                Delete
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
