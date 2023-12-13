import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logoImg.svg";
import AccountIcon from '../assets/account-icon.svg';
import ShoppingCartIcon from '../assets/cart-icon.svg';
import SearchIcon from '../assets/search-icon.svg';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-section">
        <img className="logo-img" src={Logo} alt="" />
      </div>

      <div className="navbar-links">
        <div className="home-link">
          <a href="#home-section">Home</a>
        </div>

        <div className="about-link">
          <a href="#about-section">About</a>
        </div>

        <div className="service-link">
          <a href="#service-section">Services</a>
        </div>

        <div className="shop-link">
          <a href="">Shop</a>
        </div>

        <div className="contact-link">
          <a href="#contact-section">Contact Us</a>
        </div>
      </div>

      <div className="pic-link">
        <div className="search-link">
          <img src={SearchIcon} alt="" />
        </div>
        <div className="account-link">
          <img src={AccountIcon} alt="" />
        </div>
        <div className="cart-link">
          <img src={ShoppingCartIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;