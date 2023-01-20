import React from "react";
import {createBrowserRouter,Outlet,RouterProvider}from"react-router-dom"
import NavBar from "./pages/NavBar"
import Home from "./pages/Home";

function Layout() {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  );
}

const router = createBrowserRouter([
  { path: "/",
   element : <Layout/>,
        children: [{
          path: "/", element: <Home />},]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
