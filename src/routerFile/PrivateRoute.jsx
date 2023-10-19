import { useContext } from "react";
import { ContextProvider } from "../components/AuthProvider";
import {Navigate} from 'react-router-dom'


const PrivateRoute = ({children}) => {
    const {user} = useContext(ContextProvider);

  if(!user){
    return   <Navigate to='/login'></Navigate>
  }


    return children; 
};

export default PrivateRoute;