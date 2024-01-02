import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


const Route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
    },
    {
        path:'/register',
        element: <Register/>
    },
    {
        path:'/login',
        element:<Login/>
    }
  ]);

export default Route;