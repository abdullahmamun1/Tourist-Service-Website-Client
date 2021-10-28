import React from 'react';
import useAuth from '../../hooks/useAuth';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Nav from './Header/Nav/Nav';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;