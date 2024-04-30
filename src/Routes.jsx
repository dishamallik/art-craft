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
import Error from "./components/Error";

import CraftDetails from "./components/CraftDetails";
import Update from "./components/Update";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
            
            
        },
        {
            path: "/craft",
            element: <AllArtItem></AllArtItem>,
            loader: () => fetch('https://art-craft-server-ruby.vercel.app/art')

            
        },
        {
            path: "/Add",
            element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
        },
        {
            path: "/List",
            element: <PrivateRoute><CraftList></CraftList></PrivateRoute>,
           
        },
        {
            path: '/login',
            element: <Login></Login>
        }, 
        {
            path: "/register",
            element: <Register></Register>
        },
       
        {
            path:'/art/:id',
           element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://art-craft-server-ruby.vercel.app/art/${params.id}`)
        }, 
        {
          path:"/update/:id",
          element: <Update></Update>,
          loader: ({params}) => fetch(`https://art-craft-server-ruby.vercel.app/art/${params.id}`)

        }
      

      ],
      
      
    },
    {
        path: '*',
        element: <Error></Error>
       }
  ]);

  export default router;