import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./component/router/router";
import AuthProvider from "./component/page/Provider/AuthProvider";
// import AuthProvider from "./component/page/Provider/AuthProvider";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> 
    <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>
);