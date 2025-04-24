import { Component, StrictMode, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./assets/Components/Root";
import Mobiles from "./assets/Components/Mobiles";
import Home from "./assets/Components/Home";
import Laptops from "./assets/Components/Laptops";
import Users from "./assets/Components/Users";
import Users2 from "./assets/Components/Users2";
import UserDetails from "./assets/Components/UserDetails";
// import App from "./App.jsx";

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users");

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<span>Loading...</span>}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        loader:({paramete4rs}) => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: UserDetails,
      },
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
