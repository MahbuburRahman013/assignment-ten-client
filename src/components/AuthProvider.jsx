import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import auth from "../fireBase/firebase.config";

export const ContextProvider = createContext(null); 

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([]);

    const createUser = (email,password) =>{
        return  createUserWithEmailAndPassword(auth,email,password);
    }


    const googleLogin =()=>{
        return  signInWithPopup(auth,googleProvider);
    }

    const singInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return()=>{
            unSubscribe();
        }
    },[])


const authInfo = {
    createUser,
    googleLogin,
    singInUser,
    user
}

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;