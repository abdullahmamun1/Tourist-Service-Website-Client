import React from 'react';
import Contact from './Contact/Contact'
import Destinations from './Destinations/Destinations'
import About from './About/About';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Destinations></Destinations>
            <Contact></Contact>
        </div>
    );
};

export default Home;