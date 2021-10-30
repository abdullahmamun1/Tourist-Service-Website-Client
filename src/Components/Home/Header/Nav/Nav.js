import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './nav.css'

const Nav = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="nav">
            <nav>
                <div className="logo">
                    <HashLink smooth to="/home#home">
                        <p className="leading-3 px-2 py-2
                     custom-border"><span className="font-bold text-2xl custom-color">Smart</span> <br /> Delivery</p>
                    </HashLink>
                </div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><HashLink smooth to="/home#about">About</HashLink></li>
                    <li><HashLink smooth to="/home#destinations">Destinations</HashLink></li>
                    <li><HashLink smooth to="/home#contact">Contact</HashLink></li>
                    {user.email && <li><Link to={`/orders/${user.email}`}>My Orders</Link></li>}
                    {user.email && <li><Link to="/orders/manage">Manage Orders</Link></li>}
                    {user.email && <li><Link to="/destinations/add">Add a Destination</Link></li>}
                </ul>
                <div >
                    {user.email && <small className="display-name">{user.displayName}</small>}
                    {user.email ? <button className="custom-btn" onClick={logOut}>Logout</button> : <Link className="custom-btn" to="/login">Login</Link>}
                </div>

            </nav>
        </div>
    );
};

export default Nav;