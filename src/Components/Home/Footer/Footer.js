import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="text-center relative custom-bg-color mt-20">
            <div className="lg:grid lg:grid-cols-3 items-center footer">
                <div className="logo flex items-center justify-center ">
                    <HashLink smooth to="/home#home">
                        <p className="leading-3 px-2 py-2
                     border-4 border-white-100 "><span className="font-bold text-4xl text-white">Smart</span> <br /> Delivery</p>
                    </HashLink>
                </div>
                <div className="mb-4">
                    <h1 className="text-3xl font-semibold text-white">Quick Links</h1>
                    <div className="ml-2 mt-2">
                        <HashLink to="/home#about" smooth className="hover:text-blue-700">About</HashLink><br />
                        <HashLink to="/home#destinations" smooth className="hover:text-blue-700">Destinations</HashLink><br />
                        <HashLink to="/home#contact" smooth className="hover:text-blue-700">Contact</HashLink>
                    </div>
                </div>
                <div className="mb-4">
                    <h1 className="text-3xl font-semibold text-white">Social Media</h1>
                    <div className="mt-2 ml-2">
                        <a href="/home"><FontAwesomeIcon icon={faFacebook} className="text-white mr-2 text-2xl " /></a>
                        <a href="/home"><FontAwesomeIcon icon={faInstagram} className="text-white mr-2 text-2xl " /></a>
                        <a href="/home"><FontAwesomeIcon icon={faLinkedin} className="text-white mr-2 text-2xl " /></a>
                        <a href="/home"><FontAwesomeIcon icon={faBasketballBall} className="text-white mr-2 text-2xl " /></a>
                    </div>
                </div>

            </div>
            <div className="text-center  w-4/5 bg-gray-100 shadow-lg px-2 py-4 absolute bottom-5 left-0 right-0 mx-auto">
                <p>
                    &#169; 2021 Copyright: Smart Tourist Service | All Terms Reserved
                </p>

            </div>
        </footer>
    );
};

export default Footer;