import {createBrowserRouter} from "react-router-dom";
import AddProduct from "../components/AddProduct";
import BrandProduct from "../components/BrandProduct";
import CartPage from "../components/CartPage";
import DetailsProduct from "../components/DetailsProduct";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Login from "../components/Login";
import Registration from "../components/Registration";
import UpdateProduct from "../components/UpdateProduct";
import ErrorPage from "./ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
           path:'/',
           element:<Home></Home>
        },
        {
          path:'/brandProduct/:brand',
          element:<BrandProduct></BrandProduct>,
          loader: ({params})=> fetch(`https://backend-side.vercel.app/postData/${params.brand}`)
        },
        {
          path:'addProduct',
          element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader:({params})=> fetch(`https://backend-side.vercel.app/detailsData/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><DetailsProduct></DetailsProduct></PrivateRoute>,
          loader:({params})=> fetch(`https://backend-side.vercel.app/detailsData/${params.id}`)
        },
        {
          path:'/myCart/:id',
          element:<PrivateRoute><CartPage></CartPage></PrivateRoute>,
          loader: ({params})=> fetch(`https://backend-side.vercel.app/loadCartData/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        }
      ]
    },
  ]);

export default router;