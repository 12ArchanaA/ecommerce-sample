import React from "react";
import "../styles/Footer.css";
import FbIcon from '../assets/fb-icon.svg';
import InstIcon from '../assets/insta-icon.svg';
import TwitterIcon from '../assets/twitter-icon.svg';
import Logo from "../assets/logoImg.svg";

const Footer = () => {
  return (
    <div className="footer">
        <div className="logo-section">
          <img className="logo-img" src={Logo} alt="" />
        </div>
        <div className="links-secton">
            <div className="footer-home">
              <h4>Home</h4>
            </div>
            <div className="footer-contact">
              <h4>Contact Us</h4>
            </div>
            <div className="footer-privacy">
              <h4>Privacy & Terms</h4>
            </div>
        </div>
        <div className="icon-links">
          <img src={FbIcon} alt="" />
          <img src={TwitterIcon} alt="" />
          <img src={InstIcon} alt="" />
        </div>
    </div>
  );
};

export default Footer;