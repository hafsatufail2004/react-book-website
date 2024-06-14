"use client";

import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { navLinks, navRight } from "../../Data/Data";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

export default function Nav() {
  //---------- useState for navigation show or hidden----------------//
  const [isNavLinkShowing, setIsNavLinkShowing] = useState(false);

  // --------------window scroll navlinks effect---------------------//

  if (innerWidth < 1024) {
    window.addEventListener("scroll", () => {
      document.querySelector(".nav-links").classList.add("navLinksHide");
      setIsNavLinkShowing(false);
    });
  }
  window.addEventListener("scroll", () => {
    document.querySelector(".nav").classList.toggle("navShadow",window.scrollY>0);
  });
  return (
    <nav>
      <div className="container nav-container">
        {/* ............................Logo............................. */}
        <Link to={"/"} className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        {/* ........................... NavLinks............................ */}
        <ul
          className={`nav-links ${
            isNavLinkShowing ? "navLinksShow" : "navLinksHide"
          }`}
        >
          {navLinks.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : " ")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/* ........................... NavRight............................ */}
        <div className="nav-right">
          {navRight.managements.map((item, index) => {
            return (
              <Link
                key={index}
                // target="_blank"
                className="management-icons"
                to={item.link}
              >
                <item.icon />
              </Link>
            );
          })}
          {/* btn-border btn classes */}
          <button
            className="menu-button "
            onClick={() => setIsNavLinkShowing(!isNavLinkShowing)}
          >
            {!isNavLinkShowing ? <LuMenu /> : <IoClose />}
          </button>
        </div>
      </div>
    </nav>
  );
}
