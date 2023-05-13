import React from "react";
import Notepad from "./Notepad";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Errorpage";
import Navbar from "./Navbar";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      errorElement: <ErrorPage />,
      children:[
      {
        path :"/notas",
        element: <Notepad/>,
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
