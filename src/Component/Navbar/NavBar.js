import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaFacebookF, FaChevronDown } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export default function NavBar({ isMenuOpen }) {
  const Location = useLocation();
  const [isSubMenuOpen, setIssubMenuOpen] = useState(false);

  const handleSubMenu = () => {
    setIssubMenuOpen(!isSubMenuOpen);
  };
  const dropDownIn = () => {
    setIssubMenuOpen(true);
  };
  const dropDownOut = () => {
    setIssubMenuOpen(false);
  };

  // useEffect(() => {
  //   setIssubMenuOpen(false);
  // }, [Location]);

  const subMenuStyle = {
    height: isSubMenuOpen ? "170.312px" : "0px",
    transition: "all .3s ease",
  };

  return (
    <nav
      className={
        isMenuOpen ? "nav-container nav-slide-in-out" : "nav-container"
      }
    >
      <ul className="nav-wrapper">
        <NavLink to="recruiment">
          <li className="nav-link">Recruitment</li>
        </NavLink>

        <li
          className="nav-link submenu"
          onMouseOver={dropDownIn}
          onMouseLeave={dropDownOut}
        >
          Care Services{" "}
          <FaChevronDown
            className={
              isSubMenuOpen ? "submenu-active submenu-icon" : "submenu-icon"
            }
            onClick={handleSubMenu}
          />
        </li>

        <div
          className={
            isSubMenuOpen
              ? "submenu-dropped submenu-container"
              : "submenu-container"
          }
          style={subMenuStyle}
        >
          <NavLink to="/care-services/private-care">
            <li className="nav-link submenu-link">Private Care</li>
          </NavLink>
          <NavLink to="/care-services/direct-payments">
            <li className="nav-link submenu-link">Direct Payments</li>
          </NavLink>
          <NavLink to="/care-services/funded-care">
            <li className="nav-link submenu-link">Funded Care</li>
          </NavLink>
          <NavLink to="/care-services/care-hotline">
            <li className="nav-link submenu-link">Care Hotline</li>
          </NavLink>
        </div>

        <NavLink to="/about">
          <li className="nav-link">About Us</li>
        </NavLink>
        <NavLink to="/the-team">
          <li className="nav-link">The Team</li>
        </NavLink>
        <NavLink to="/testimonials">
          <li className="nav-link">Testimonials</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="nav-link">Contact Us</li>
        </NavLink>
        <NavLink to="/news">
          <li className="nav-link">News</li>
        </NavLink>
      </ul>

      <div className="nav-social-icon">
        <FaFacebookF /> <RiLinkedinFill />
      </div>
    </nav>
  );
}
