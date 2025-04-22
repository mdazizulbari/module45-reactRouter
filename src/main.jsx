import { Component, StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./assets/Components/Root/Root";
import Mobiles from "./assets/Components/Mobiles/Mobiles";
import Home from "./assets/Components/Home/Home";
import Laptops from "./assets/Components/Laptops/Laptops";
// import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops  },
    ],
  },
  {
    path: "about",
    element: <div>About section</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
