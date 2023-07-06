
import { useEffect, useState } from "react";
import { AuthenticatorLogin } from "../../service/Authentication";
import { AuthContext } from "./AuthContext";
import * as firebaseAuth from 'firebase/auth';
import { auth } from '../../FirebaseConfig';




// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {

    const authService =  AuthenticatorLogin()

    const [isLoadingLoggedUser, setIsLoadingLoggedUser] = useState(true);
    const [user, setUser] = useState(null);
  
    useEffect(() => {
        firebaseAuth.onAuthStateChanged(auth, (user) => {
            setIsLoadingLoggedUser(false);
            setUser(user);
        })
    }, []);

    return (
        <AuthContext.Provider value={{
            isLoadingLoggedUser, user, authService
        }}>
            {children}
        </AuthContext.Provider>
    )

}