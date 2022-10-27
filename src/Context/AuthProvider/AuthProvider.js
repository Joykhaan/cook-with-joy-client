import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';



export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const auth= getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);
    console.log(user)
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

    // GoogleAuthProvider
    const login = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }
    // for logout
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    // for github login
    const gitLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }

    // for email pass register
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // for email pass register
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    // for update user rofile
    const updateUserProfile = (profile) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile);
    }

    // toggle theme
    const [theme,setTheme]=useState('dark');
    const toggleTheme = ()=>{
        setTheme((curr)=>(curr==='light'?'dark':'light'))
    }

    //provide value
    const authInfo = {user,loading,login,gitLogin,logOut,createUser,logIn,setUser,updateUserProfile,theme,toggleTheme};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;