import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker, faAt } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div id="contact" className="my-20 pt-20">
            <div className="text-center my-10">
                <h1 className="custom-color text-5xl font-bold ">Contact Us</h1>
                <p>Contact with us if you have any queries!</p>
            </div>
            <form className="mb-8">
                <div className="flex flex-col items-center">
                    <input type="text" name="name" placeholder="Your Name" className="bg-gray-200 shadow-xl  p-1 w-3/4 mb-4" id="" />
                    <input type="email" name="email" placeholder="Your Email" className="bg-gray-200 shadow-xl w-3/4 p-1 mb-4" id="" />
                    <textarea placeholder="Your Message" className="bg-gray-200 shadow-xl h-20 w-3/4 mb-4 p-1" ></textarea><br />
                </div>
                <div className=" flex flex-col items-center">
                    <input type="submit" value="Submit" className="custom-btn w-3/4" />
                </div>
            </form>
            <div className="flex justify-center">
                <div className="lg:grid lg:grid-cols-3 w-4/5 bg-gray-100 shadow-lg px-4 py-8">
                    <div className="flex justify-center mb-2 lg:mb-0">
                        <FontAwesomeIcon className="text-gray-500 text-2xl mr-2" icon={faPhone} />
                        <p className="text-sm lg:text-lg">01777222334</p>
                    </div>
                    <div className="flex justify-center mb-2 lg:mb-0">
                        <FontAwesomeIcon className="text-gray-500 text-2xl mr-2" icon={faMapMarker} />
                        <p className="text-sm lg:text-lg">1 no. Street, Omuk Road , City</p>
                    </div>
                    <div className="flex justify-center">
                        <FontAwesomeIcon className="text-gray-500 text-2xl mr-2" icon={faAt} />
                        <p className="text-sm lg:text-lg">abcdef@email.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;