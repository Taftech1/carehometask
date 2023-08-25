import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../assent/constant";
import HamBurger from "../Navbar/HamBurger";
import NavBar from "../Navbar/NavBar";
import "./header.css";

function Header() {
 const Location = useLocation()
  const [OpenMenu, setOpenMenu] = useState(false);

  const HandleMenu = () => {
    setOpenMenu(!OpenMenu);
  };
    
    useEffect(() => {
        window.scrollTo(0,0)
        setOpenMenu(false);
        
    }, [Location])

  return (
    <div className="header-conatiner">
      <Link to={"/"}>
        <div className="logo-wrapper">
          <img src={logo} alt="logo-img" />
        </div>
      </Link>
      <div className="hamburger-wrapper">
        <HamBurger isMenuOpen={OpenMenu} HandleMenu={HandleMenu} />
      </div>
      <NavBar isMenuOpen={OpenMenu} />
    </div>
  );
}

export default Header;
