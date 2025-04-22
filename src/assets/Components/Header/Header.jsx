import React from "react";
import { NavLink } from "react-router";
import "../../../App.css"

const Header = () => {
  return (
    <div>
      <h4 className="text-center">This is Header</h4>
      <nav className="flex gap-3">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/mobiles"}>Mobiles</NavLink>
        <NavLink to={"/laptops"}>Laptops</NavLink>
        <NavLink to={"/"}>Home</NavLink>
      </nav>
    </div>
  );
};

export default Header;
