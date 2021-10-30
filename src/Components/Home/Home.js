import React from 'react';
import Contact from './Contact/Contact'
import Destinations from './Destinations/Destinations'
import About from './About/About';
import Banner from './Banner/Banner';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { isLoading } = useAuth()

    if (isLoading) {
        return (
            <div class="flex justify-center items-center my-10">
                <div
                    class="animate-spin rounded-full h-16 w-16 border-b-2 custom-border-color"
                ></div>
            </div>)
    }
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