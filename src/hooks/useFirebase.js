import { useEffect, useState } from 'react';
import initializeAuthentication from '../Components/Firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [destinations, setDestinations] = useState([])
    const [isPending, setIsPending] = useState(true);


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


    useEffect(() => {
        fetch('https://secret-meadow-63118.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
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
        destinations,
        isLoading,
        setIsLoading,
        isPending,
        setIsPending,
        setUser,
        logOut
    };
};

export default useFirebase;