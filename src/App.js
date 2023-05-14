import React from "react";
import Notepad from "./Notepad";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Errorpage";
import Navbar from "./Navbar";
import Sobre from "./Sobre";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      errorElement: <ErrorPage />,
      children:[
      {
        path :"/",
        element: <Notepad/>,
        errorElement: <ErrorPage />,
      },
      {
        path :"/sobre",
        element: <Sobre/>,
        errorElement: <ErrorPage />,
      }
      ],
    },
  ]);
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}
