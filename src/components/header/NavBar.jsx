import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="/Clicky" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="/Clicky/category/100">
            100%
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="/Clicky/category/70">
            70%
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="/Clicky/category/60">
            60%
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;