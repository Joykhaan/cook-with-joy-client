import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';



export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const auth= getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            console.log('user state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const login = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const gitLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {user,loading,login,gitLogin,logOut,createUser,logIn,setUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;