import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Root = () => {
  return (
    <div className="flex items-center flex-col h-screen gap-5">
      <Header></Header>
      <div className="flex gap-10">
        <Sidebar></Sidebar>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
