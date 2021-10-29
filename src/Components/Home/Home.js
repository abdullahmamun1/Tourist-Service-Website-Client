import React from 'react';
import Contact from '../Contact/Contact';
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
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;