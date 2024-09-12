import React from "react";
import "./NavBar.css";


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="title">
          <a href="#">HairHub</a>
        </div>
      </div>
      <div>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a className="join-btn" href="#">
          Join Waitlist
        </a>
      </div>
    </div>
  );
};

export default NavBar;
