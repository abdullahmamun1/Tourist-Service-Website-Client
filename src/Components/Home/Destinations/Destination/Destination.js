import React from 'react';
import './destination.css'

const Destination = ({ destination }) => {
    const { img, name, description } = destination;
    return (
        <div className="hover:shadow-xl  destination flex flex-col justify-between mb-6 lg:mb-0 ">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="p-6">
                <h1 className="text-3xl font-semibold">{name}</h1>
                <p className="text-justify">{description}</p>
            </div>
            <div className="p-6 flex justify-center">
                <button className="custom-btn">Book Now</button>
            </div>
        </div>
    );
};

export default Destination;