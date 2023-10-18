import { createBrowserRouter } from "react-router-dom";
import Root from "../root/root";
import Login from "../page/Login";
import Home from "../page/Home";
import Register from "../page/Register";
import ErrorPage from "../page/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import Product from "../Product/Product";
// import Brand from "../page/Brand";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
            loader: () => fetch('brand.json')
            
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path: '/product',
            element:<PrivateRouter> <Product></Product> </PrivateRouter>
           
        },
      ]
    },
  ]);

  export default router;
