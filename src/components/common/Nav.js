import React from "react";
import "../common/Nav.css";
import logo from "../../Asserts/navlogo.jpg";
import menulogo from "../../Asserts/navmenuimg.jpg";
import ReactCoutryFlag from "react-country-flag";

function Navbar() {
  return (
    <nav className="navbar">
     <div className="logo-section">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        <div className="logo-text">
          <h2>BookRetreats.com</h2>
          <span>World's #1 Retreat Site</span>
        </div>
    </div>
    {/* RIGHT SECTION */}
    <div className="nav-links">
        <a href="/">Explore</a>
        <a href="/">About</a>
        <a href="/">Help</a>
        <a href="/">Wishlists</a>
        <a href="/">Add Retreat</a>
    {/* CURRENCY */}
        <div className="currency">
          <ReactCoutryFlag countryCode="IN" svg/>
          INR (₹)
        </div>
    {/* MENU BUTTON */}
       <button className="menu-btn">
          <img src={menulogo} alt ="" className="menu-logo"/>☰ Menu
        </button>
    </div>
    </nav>
  );
}

export default Navbar;