import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
// import { ReactComponent as Logo } from "./logo.png";
// import logo from "./logo";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          {/* <logo
            src="./logo.png"
            width="30"
            height="72"
            className="d-inline-block align-top"
            // alt="GREENTICK logo"
          /> */}
          <a className="navbar-brand" href="/">
          <div className="logo"><img src={logo} width="212" height="60" alt="" loading="lazy" /></div>
          </a>
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <div className="home">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </NavLink>

              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contest">
                Contest
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink

                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/practice">
                Practice
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resources">
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/globalcompetitions">
                Competitions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login">
                <div class="login"> Login </div>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
