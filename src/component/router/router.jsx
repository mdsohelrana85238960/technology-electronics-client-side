import { createBrowserRouter } from "react-router-dom";
import Root from "../root/root";
import Login from "../page/Login";
import Home from "../page/Home";
import Register from "../page/Register";
import ErrorPage from "../page/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import BrandProduct from "../page/BrandProduct";
import AddProduct from "../Product/AddProduct";
import UpdateProduct from "../page/UpdateProduct";
import Details from "../page/details";


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
            path: '/updateProduct/:id',
            element:<UpdateProduct></UpdateProduct>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
    
        },
        {
            path: '/details/:id',
            element:<Details></Details>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
    
        },
       
        {
            path: '/products/:brand',
            element:<PrivateRouter><BrandProduct></BrandProduct></PrivateRouter>,
            loader: () => fetch(`http://localhost:5000/products`)
        },
      ]
    },
  ]);

  export default router;
