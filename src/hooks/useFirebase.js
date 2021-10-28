import { useState } from 'react';
import initializeAuthentication from '../Components/Firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const signOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            console.log(error.message);
        });
    }
    return {
        signInUsingGoogle,
        user,
        setUser,
        signOut
    };
};

export default useFirebase;