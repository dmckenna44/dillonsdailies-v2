import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2 className="home-link" onClick={() => navigate('/')}>Dillons Dailies</h2>
      <div className="nav-links">
        <a href="/extras">Extras</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </div>
    </div>
  )
}

export default Navbar;