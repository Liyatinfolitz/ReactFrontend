import React from "react";
import { Link } from 'react-router-dom';
import './loginstyle.css';

function HeaderHR() {
  return (
    <section className="w3l-header-4 header-sticky">
      <header className="absolute-top">
        <div className="container-fluid pr-lg-0">
          <nav className="navbar navbar-expand-lg navbar-light">
            <h1>
              <a className="navbar-brand" href="#">
                Project Management
              </a>
            </h1>
            <button
              className="navbar-toggler bg-gradient collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa icon-expand fa-bars"></span>
              <span className="fa icon-close fa-times"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item @@home__active">
                  <Link to="/hrhome" className="nav-link">Home</Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/hrprojects" className="nav-link">Projects</Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link to="/employees" className="nav-link">Work Report</Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link to="/hremployees" className="nav-link">Employees</Link>
                </li> */}
                <li className="nav-item ml-lg-3">
                  <Link to="/" className="nav-link">Logout</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </section>
  );
}

export default HeaderHR;
