import React from "react";
import logo from "../src/Images/logo 1.png"
import { NavLink } from "react-router-dom";
import userImg from './Images/userImg.png'

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-nav">
        <div className="row">
          <div className="col-lg-11 col-sm-12 nts mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light mt-2">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img src={logo} width={"180px"} alt={logo}></img>
                </NavLink>
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
                  className="collapse navbar-collapse ms-4"
                  id="navbarSupportedContent"
                >
                  <>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink
                          className="nav-link "
                          to="/home"
                        >
                          Home
                        </NavLink>
                      </li>

                      <li className="nav-item dropdown mx-2">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          to="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Features
                        </NavLink>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <NavLink className="dropdown-item" to="/activities">
                              Activities
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="dropdown-item" to="/bookings">
                              My Bookings
                            </NavLink>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <NavLink className="dropdown-item" to="/addActivity">
                              Add Activity
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                          About us
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/blog">
                          Blog
                        </NavLink>
                      </li>
                    </ul>
                  </>
                  {/* <div className="d-flex nav-right ml-auto">
                    <button className="btn me-2 btn1" type="submit">
                      <NavLink to={"/account/login"}>Log in</NavLink>
                    </button>
                    <NavLink to={"/account/signUp"}>
                    <button className="btn btn2 text-white"  type="submit">
                    Sign Up
                    </button></NavLink>
                  </div> */}
                  <div className="d-flex nav-right ml-auto">
                    <div className="userBox">
                      <img src={userImg} alt={userImg}></img>
                      <div className="d-block">
                        <h4>Nishant Bazzad</h4>
                        <p>Expert</p>
                      </div>
                      
                      <div className="user-drop-down">
                        <NavLink
                          className="nav-link dropdown-toggle user-options"
                          to="/"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                        </NavLink>
                        
                        </div>


                    </div>

                  </div>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
