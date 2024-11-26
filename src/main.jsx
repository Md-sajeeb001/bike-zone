import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddBikes from "./components/AddBikes";
import Bikes from "./components/Bikes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Bikes></Bikes>,
        loader: () => fetch("http://localhost:5000/addBike"),
      },
      {
        path: "/addBikes",
        element: <AddBikes></AddBikes>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
