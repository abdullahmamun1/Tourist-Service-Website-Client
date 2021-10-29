import React, { useEffect, useState } from 'react';
import Destination from './Destination/Destination';

const Destinations = () => {
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch('https://secret-meadow-63118.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])
    return (
        <div id="destinations" className="my-20 px-2">
            <div className="text-center mb-20 px-2">
                <h1 className="lg:text-5xl text-5xl mb-2 font-bold  custom-color">Choose your destinations</h1>
                <p>We are offering your some of the popular tourist countries. Choose your favourite one!</p>
            </div>
            <div className="justify-center flex">
                <div className="lg:grid lg:grid-cols-3 gap-8 w-11/12">
                    {
                        destinations.map(destination => <Destination key={destination._id} destination={destination}></Destination>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Destinations;