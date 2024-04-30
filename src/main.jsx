import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import HomePage from "./HomePage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
