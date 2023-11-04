import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Testform from "./Testform";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/form",
      element: <Testform/>
    }
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
