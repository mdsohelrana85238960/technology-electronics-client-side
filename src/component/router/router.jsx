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
import Cart from "../page/Cart";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
            loader: () => fetch('/brand.json')
            
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
            path: '/cart',
            element:<PrivateRouter> <Cart></Cart> </PrivateRouter>,
            loader: () => fetch('https://technology-electronics-server-2znvhdtbk-my-team-88e02784.vercel.app/carts')
        },
        {
            path: '/addProduct',
            element:<PrivateRouter> <AddProduct></AddProduct> </PrivateRouter>
        },
        {
            path: '/updateProduct/:id',
            element:<PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>,
            loader: ({params}) => fetch(`https://technology-electronics-server-2znvhdtbk-my-team-88e02784.vercel.app/products/${params.id}`)
    
        },
        {
            path: '/details/:id',
            element:<PrivateRouter><Details></Details></PrivateRouter>,
            loader: ({params}) => fetch(`https://technology-electronics-server-2znvhdtbk-my-team-88e02784.vercel.app/products/${params.id}`)
    
        },
       
        {
            path: '/products/:brand',
            element:<PrivateRouter><BrandProduct></BrandProduct></PrivateRouter>,
            loader: () => fetch(`https://technology-electronics-server-2znvhdtbk-my-team-88e02784.vercel.app/products`)
        },
      ]
    },
  ]);

  export default router;
