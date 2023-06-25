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
    const dataRecoverPassWord = firebaseAuth.sendPasswordResetEmail(auth, email) 
    return dataRecoverPassWord;
}

export const LogOut = () => {
    const LogOut = firebaseAuth.signOut(auth) 
 return LogOut;
  

}