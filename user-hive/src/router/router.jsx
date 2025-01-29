import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import AdminDasboard from "../pages/AdminDasboard";
import UserPrivate from "./UserPrivate";
import AdminPrivate from "./AdminPrivate";
import EditUser from "../pages/EditUser";





 export let myRoutes =createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          
          path:'/login',
          element:<Login/>
        },
        {
         path:'/signup',
          element:<Signup/>
        },
        {
         path:'/profile',
          element:(
            <UserPrivate>
              <Profile/>
            </UserPrivate>
          )
        },
        {
          path:'/admin',
          element:(
            <AdminPrivate>
              <AdminDasboard/>
            </AdminPrivate>
          )
          

        },
        {
          path:"/edit/:id",
          element:(
            <AdminPrivate>
              <EditUser/>
            </AdminPrivate>
          )
          

        }
      ]

    },
  ]);