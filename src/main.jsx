import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddBikes from "./components/AddBikes";
import Bikes from "./components/Bikes";
import UpDateBike from "./components/UpDateBike";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AuthProvider from "./Auth/AuthProvider";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
        element: (
          <PrivetRoute>
            <AddBikes></AddBikes>
          </PrivetRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <UpDateBike></UpDateBike>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addBike/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
