import React from "react";


const Navbar = () => {



  return (
    <div className="navbar">
      <h2 className="home-link">Dillons Dailies</h2>
      <div className="nav-links">
        <a href="/extras">Extras</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </div>
    </div>
  )
}

export default Navbar;