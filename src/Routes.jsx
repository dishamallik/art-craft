import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home";
import AllArtItem from "./components/AllArtItem";
import AddCraftItem from "./components/AddCraftItem";
import CraftList from "./components/CraftList";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/craft",
            element: <AllArtItem></AllArtItem>
        },
        {
            path: "/Add",
            element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
        },
        {
            path: "/List",
            element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        }, 
        {
            path: "/register",
            element: <Register></Register>
        },
        

      ]
    },
  ]);

  export default router;