import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';



export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const auth= getAuth(app);

    const [user, setUser] = useState(null);

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            console.log('user state change', currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const login = (provider) =>{
        return signInWithPopup(auth,provider);
    }
    const gitLogin = (provider) =>{
        return signInWithPopup(auth,provider);
    }

    const authInfo = {user,login,gitLogin};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;