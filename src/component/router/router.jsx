import { createBrowserRouter } from "react-router-dom";
import Root from "../root/root";
import Login from "../page/Login";
import Home from "../page/Home";
import Register from "../page/Register";
import ErrorPage from "../page/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import BrandProduct from "../page/BrandProduct";
import AddProduct from "../Product/AddProduct";


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
            path: '/addProduct',
            element:<PrivateRouter> <AddProduct></AddProduct> </PrivateRouter>
        },
        {
            path: '/products/:brand',
            element:<PrivateRouter><BrandProduct></BrandProduct></PrivateRouter>,
            // loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
            loader: () => fetch(`http://localhost:5000/products`)
        },
      ]
    },
  ]);

  export default router;
