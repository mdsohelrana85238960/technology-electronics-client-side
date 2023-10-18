import { createBrowserRouter } from "react-router-dom";
import Root from "../root/root";
import Login from "../page/Login";
import Home from "../page/Home";
import Register from "../page/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        // {
        //     path: '/login',
        //     element:<Login></Login>
        // },
      ]
    },
  ]);

  export default router;
