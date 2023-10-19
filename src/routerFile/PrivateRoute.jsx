import { useContext } from "react";
import { ContextProvider } from "../components/AuthProvider";
import {Navigate, useLocation} from 'react-router-dom'


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(ContextProvider);
    const location = useLocation()
  
    if(loading){
        <span className="loading loading-spinner loading-lg"></span>
    }

  if(!user){
    return   <Navigate state={location.pathname} to='/login'></Navigate>
  }


    return children; 
};

export default PrivateRoute;