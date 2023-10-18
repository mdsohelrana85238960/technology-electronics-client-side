import { createContext, useEffect, useState } from "react";
import app from "../../firebase/FireBase";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
    
        const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
            console.log('user in the state change ', currentUser);
            setUser(currentUser);
            // setLoading(false)
        })
        return () =>{
            unSubscribe()
        } 
    },[])


    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth);
    }


    const authInfo = {
        createUser,
        signIn,
         logOut,
         user
        }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;