import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './nav.css'

const Nav = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="nav">
            <nav>
                <div>
                    <Link to="/home">
                        <p className="leading-3 px-2 py-2
                     custom-border"><span className="font-bold text-2xl custom-color">Smart</span> <br /> Delivery</p>
                    </Link>
                </div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    {user.email && <li><Link to="myOrders">My Orders</Link></li>}
                    {user.email && <li><Link to="/services/manage">Manage Orders</Link></li>}
                    {user.email && <li><Link to="/services/add">Add a Service</Link></li>}
                </ul>
                <div >
                    {user.email && <small className="display-name">{user.displayName}</small>}
                    {user.email ? <button className="custom-btn" onClick={logOut}>Logout</button> : <Link className="custom-btn " style={{ "text-decoration": "none" }} to="/login">Login</Link>}
                </div>

            </nav>
        </div>
    );
};

export default Nav;