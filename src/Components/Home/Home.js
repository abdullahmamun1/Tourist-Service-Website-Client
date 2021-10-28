import React from 'react';
import Services from '../Services/Services';
import About from './About/About';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;