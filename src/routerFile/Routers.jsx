import {createBrowserRouter} from "react-router-dom";
import AddProduct from "../components/AddProduct";
import BrandProduct from "../components/BrandProduct";
import DetailsProduct from "../components/DetailsProduct";
import Home from "../components/Home";
import Layout from "../components/Layout";
import UpdateProduct from "../components/UpdateProduct";

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
          element:<BrandProduct></BrandProduct>,
          loader: ({params})=> fetch(`http://localhost:5000/postData/${params.brand}`)
        },
        {
          path:'addProduct',
          element:<AddProduct></AddProduct>
        },
        {
          path:'/update/:id',
          element:<UpdateProduct></UpdateProduct>,
          loader:({params})=> fetch(`http://localhost:5000/detailsData/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<DetailsProduct></DetailsProduct>,
          loader:({params})=> fetch(`http://localhost:5000/detailsData/${params.id}`)
        }
      ]
    },
  ]);

export default router;