import React from "react";
import "../styles/Registration.css"
import HomeImg from "../assets/home-img.svg";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Registration = () => {
  return (
    <div className="container" style={{
      backgroundImage: `url(${HomeImg})`,
    }}>
        
        <div className="navbar-part">
          <Navbar />
        </div>

        <div className="form-contents">
      <div className="left-section">
        <h2>Create Account</h2>
        <form id="myForm">
          <div className="form-group">
            <div className="single-form-input">
              {/* <label for="Name">Name</label> */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="form-control"
                required
              />
              <div className="error-message" id="name-error"></div>
            </div>
            <div className="single-form-input">
              {/* <label for="phone">Phone</label> */}
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="form-control"
                required
              />
              <div className="error-message" id="phone-error"></div>
            </div>
            <div className="single-form-input">
              {/* <label for="Password">Password</label> */}
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                className="form-control"
                required
              />
              <div className="error-message" id="password-error"></div>
            </div>
            <div className="submission-button">
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="right-section">
        <img src="" className="right-section-image"></img>
      </div> */}
      <span className="sign-in">
        <p>Already have an account? </p>
          <NavLink to="/signIn">Sign-in</NavLink>
          {/* <a href=""  id="account-signIn">
           Sign-in
          </a> */}
        </span></div>

        <div className="footer-part">
        <Footer/>
      </div>
    </div>
  );
};

export default Registration;