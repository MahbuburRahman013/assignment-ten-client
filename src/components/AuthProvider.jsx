import { createContext } from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
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

    const singInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }


const authInfo = {
    createUser,
    googleLogin,
    singInUser
}

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;