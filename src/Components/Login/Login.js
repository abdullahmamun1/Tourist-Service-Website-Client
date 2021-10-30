import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './login.css'

const Login = () => {
    const { signInUsingGoogle, user, setUser, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || '/home'
    console.log(url.pathname !== `/orders/${user.email}`);


    const handleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                setUser(result.user);

                if (url.pathname !== `/orders/${user.email}`) {
                    history.push('/home')
                }
                else {
                    history.push(url)
                }

            })
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => { setIsLoading(false) });

    }
    return (
        <div className="login">
            <div className="login-box hover:shadow-lg">
                <h1 className="text-4xl font-bold py-4">Please <span className="custom-color">Login</span> Here</h1>
                <button className="custom-btn" onClick={handleSignIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;