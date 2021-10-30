import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './myOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth();
    const { userId } = useParams();


    useEffect(() => {
        const url = `http://localhost:5000/orders/${userId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (userId === user.email) {
                    setOrders(data)
                }
            })
    }, [])
    return (
        <div className="py-20 ">
            <div>
                <h1 className="font-bold text-5xl custom-color text-center mb-10">My orders</h1>
            </div>
            <div className="flex justify-center">
                <div className="lg:grid lg:grid-cols-3 lg:gap-4 w-4/5  ">
                    {
                        orders.map(order => <div key={order._id}>
                            <div className="bg-gray-300 p-4 shadow-md h-full order-details">
                                <h1><span>Order No</span> - <small>{order._id}</small></h1>
                                <h1><span>Name</span>: {order.username}</h1>
                                <p><span>Address</span>: {order.address}</p>
                                <p><span>Selected Place</span>: {order.place}</p>
                                <p><span>Tour Duration</span> : {order.duration} Hours</p>
                                <p><span>Total Person</span>: {order.numberOfPerson}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default MyOrders;