import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about-content">
                <div className="text-center">
                    <h1 className="text-5xl font-bold ">Who We Are?</h1>
                    <p className="">About <span className="custom-color">smart tourist service</span></p>
                </div>
                <div className="about-image">
                    <img src="https://i.ibb.co/dK6VM5M/Robotic-receptionists-meeting-guest-at-hotel.png" alt="" />
                </div>
                <div className="about-text">
                    <p><span className="custom-color text-3xl lg:text-5xl font-bold">Our aim</span> is to promote sustainable tourism, serving as a link between our customers and their destination.We will provide an "exciting journey" that is safe and comfortable, based on empathic values through our business.</p>
                    <p><span className="custom-color text-3xl lg:text-5xl font-bold "> We </span>contributes towards complete growth and development of a country: one, by bringing numerous economic value & benefits; and, second, helping in build country's brand value, image & identity. Tourism industry goes beyond attractive destinations, to being an important economic growth contributor.</p>
                    <p><span className="custom-color text-3xl lg:text-5xl font-bold">Our </span>workers works so hard so that they can help people to go to their destination safely. We work togther with customers and maintain safety and security We are smart tourist service., as we love to travel the world , we also want to see prople travel the world</p>
                </div>
            </div>
        </div>
    );
};

export default About;