import React from "react";
import "../styles/Verification.css"
import HomeImg from "../assets/home-img.svg";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Verification = () => {
  return (
    <div className="container" style={{
      backgroundImage: `url(${HomeImg})`,
    }}>
        
        <div className="navbar-part">
          <Navbar />
        </div>
        <div className="verification-page">
            <h2>Verification</h2>
            <p>Enter the codewe sent to your phone</p>
            <div className="otp-inputs">
                <input type="text" maxlength="1" autofocus/>
                <input type="text" maxlength="1"/>
                <input type="text" maxlength="1"/>
                <input type="text" maxlength="1"/>
            </div>

            <div className="resend-message">
                <p>Didn't receive the code? <a href="">Resend</a></p>
            </div>
            <div className="submission-button">
              <button type="submit" className="submit-btn">
                Verify
              </button>
            </div>
        </div>
      
        <div className="footer-part">
        <Footer/>
      </div>
    </div>
  );
};

export default Verification;