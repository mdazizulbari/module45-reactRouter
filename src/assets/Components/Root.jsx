import React from "react";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Root = () => {
  const navigation = useNavigate();
  const isNavigating = Boolean(navigation.location)

  return (
    <div className="flex items-center flex-col h-screen gap-5">
      <Header></Header>
      <div className="flex gap-10">
        <Sidebar></Sidebar>
        {isNavigating && <span>Loading...</span>}
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
