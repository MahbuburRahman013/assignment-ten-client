import {createBrowserRouter} from "react-router-dom";
import AddProduct from "../components/AddProduct";
import BrandProduct from "../components/BrandProduct";
import Home from "../components/Home";
import Layout from "../components/Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
           path:'/',
           element:<Home></Home>
        },
        {
          path:'/brandProduct/:brand',
          element:<BrandProduct></BrandProduct>
        },
        {
          path:'addProduct',
          element:<AddProduct></AddProduct>
        }
      ]
    },
  ]);

export default router;