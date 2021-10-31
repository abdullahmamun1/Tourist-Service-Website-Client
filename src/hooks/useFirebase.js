import { useEffect, useState } from 'react';
import initializeAuthentication from '../Components/Firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [destinations, setDestinations] = useState([])


    const auth = getAuth();


    //  OBSERVE USER CHANGE
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

    //SET DESTINATIONS
    useEffect(() => {
        fetch('https://secret-meadow-63118.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])


    //GOOGLE SIGN IN
    const signInUsingGoogle = () => {
        const provider = new GoogleAuthProvider();
        setIsLoading(true)
        return signInWithPopup(auth, provider)
    }


    //SIGN OUT
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
        setUser,
        logOut
    };
};

export default useFirebase;