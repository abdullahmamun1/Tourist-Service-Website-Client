import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className="banner" id="home">
            <div className="banner-content lg:flex lg:items-center">
                <div className="half-width">
                    <div>
                        <h1 className="text-5xl mb-4 mt-4">This Is <br /><span className="custom-color font-bold">Smart Tourist Service</span></h1>
                        <p >We will plan your vacations for you, so that you <br /> can enjoy your free time peacefully.</p>
                    </div>
                </div>
                <div className="half-width">
                    <img src="https://i.ibb.co/0V49CYd/10811-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;