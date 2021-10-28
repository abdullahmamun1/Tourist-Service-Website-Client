import { useEffect, useState } from 'react';
import initializeAuthentication from '../Components/Firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

                // ...
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    const signInUsingGoogle = () => {
        const provider = new GoogleAuthProvider();
        setIsLoading(true)
        return signInWithPopup(auth, provider)
    }



    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            console.log('signout done');
            setUser({})

        }).finally(() => {
            setIsLoading(false);
        })
    };


    return {
        signInUsingGoogle,
        user,
        isLoading,
        setIsLoading,
        setUser,
        logOut
    };
};

export default useFirebase;