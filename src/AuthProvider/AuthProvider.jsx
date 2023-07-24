import React, { createContext, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(app)

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider(); 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const authInfo = {
        user,
        googleSignUp,
        facebookLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;