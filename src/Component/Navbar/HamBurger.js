import React from "react";
import "./navbar.css";

function HamBurger({ isMenuOpen, HandleMenu }) {
  const toggleMenu = {
    backgroundColor: isMenuOpen ? "white" : "#1e89d5",
    transition: "all 0.3s ease-in-out"
  };
  return (
    <div className="hambuger-conatainer" onClick={HandleMenu}>
      <div className="bar" style={toggleMenu}></div>
      <div className="bar" style={toggleMenu}></div>
      <div className="bar" style={toggleMenu}></div>
    </div>
  );
}

export default HamBurger;
