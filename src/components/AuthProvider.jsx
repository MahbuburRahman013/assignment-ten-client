import { createContext } from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import auth from "../fireBase/firebase.config";

export const ContextProvider = createContext(null); 

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const createUser = (email,password) =>{
        return  createUserWithEmailAndPassword(auth,email,password);
    }


    const googleLogin =()=>{
        return  signInWithPopup(auth,googleProvider);
    }


const authInfo = {
    createUser,
    googleLogin
}

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;