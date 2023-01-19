import React from "react";
import {createBrowserRouter,RouterProvider}from"react-router-dom"
import NavBar from "./pages/NavBar"

const router=createBrowserRouter([
  {
    path:"/",
    element:<NavBar></NavBar>
  }
])
function App() {
  return (
  
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
