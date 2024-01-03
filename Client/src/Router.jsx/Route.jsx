import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";


const Route = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
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