import React from "react";
import { NavLink } from "react-router";
import "../../App.css";

const Header = () => {
  return (
    <div className="mt-20">
      <h4 className="text-center">This Header</h4>
      <nav className="flex gap-3">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/mobiles"}>Mobiles</NavLink>
        <NavLink to={"/laptops"}>Laptops</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/users2"}>Users2</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
