import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './login.css'

const Login = () => {
    const { signInUsingGoogle, setUser, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || '/home'


    const handleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                setUser(result.user);
                history.push(url)
            })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => { setIsLoading(false) });

    }
    return (
        <div className="login">
            <div className="login-box">
                <h1 className="text-4xl font-bold py-4">Please <span className="custom-color">Login</span> Here</h1>
                <button className="custom-btn" onClick={handleSignIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;