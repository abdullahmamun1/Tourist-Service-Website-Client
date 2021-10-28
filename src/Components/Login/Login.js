import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setUser } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || '/home'


    const handleSignIn = () => {
        signInUsingGoogle
            .then((result) => {
                setUser(result.user);
                history.push(url)
            }).catch((error) => {
                console.log(error.message);
            });

    }
    return (
        <div>
            <h1>Please Login Here</h1>
            <button onClick={handleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;