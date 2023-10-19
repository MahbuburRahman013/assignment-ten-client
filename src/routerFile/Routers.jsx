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
import PrivateRoute from "./PrivateRoute";

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
          element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/detailsData/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><DetailsProduct></DetailsProduct></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/detailsData/${params.id}`)
        },
        {
          path:'/myCart',
          element:<PrivateRoute><CartPage></CartPage></PrivateRoute>,
          loader: ()=> fetch('http://localhost:5000/loadCartData')
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