import * as firebaseAuth from 'firebase/auth';
import { auth } from '../FirebaseConfig';


export const AuthenticatorLogin = (email, senha) => {

    const data = firebaseAuth.signInWithEmailAndPassword(
        auth, email, senha
    )
        .then(user => {
            console.log(user);
            return user;
        })
        .catch(error => {
            console.log('error', error);
            return error;
        });

    return data;



}

export const RecoverPassword = (email) => {
    return firebaseAuth.sendPasswordResetEmail(auth, email);
}

export const LogOut = () => {
    return firebaseAuth.signOut(auth);
 
  

}