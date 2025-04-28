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
import Posts from "./assets/Components/Posts";
import PostDetails from "./assets/Components/PostDetails";
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
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails,
      },
    ],
  },
  {
    path: "about",
    element: <div>About section</div>,
  },
  { path: "*", element: <div className="flex justify-center items-center h-screen text-3xl font-bold">404 Not Found</div> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
