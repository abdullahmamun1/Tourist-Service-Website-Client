import { useEffect, useState } from 'react';
import initializeAuthentication from '../Components/Firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            console.log('signout done');
            setUser({})
        }).catch((error) => {
        });
    };


    return {
        signInUsingGoogle,
        user,
        setUser,
        logOut
    };
};

export default useFirebase;