import { createContext } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import auth from "../fireBase/firebase.config";

export const ContextProvider = createContext(null); 

const AuthProvider = ({children}) => {

    const createUser = (email,password) =>{
        return  createUserWithEmailAndPassword(auth,email,password);
    }


const authInfo = {
    createUser
}

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;