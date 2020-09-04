import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">
          <div className="logo">
            <img src={logo} width="212" height="60" alt="" loading="lazy" />
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
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
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
