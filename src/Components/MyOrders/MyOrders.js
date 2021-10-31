import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './myOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth();


    useEffect(() => {
        const url = `https://secret-meadow-63118.herokuapp.com/orders/`
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                const userOrders = data.filter(order => order.email === user.email)
                setOrders(userOrders)
            })
    }, [])


    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Do you want to delete this order?');
        if (proceed) {
            fetch(`https://secret-meadow-63118.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted')
                    }
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                })
        }
    }

    return (
        <div className="py-20 ">
            <div>
                <h1 className="font-bold text-5xl custom-color text-center mb-10">My orders</h1>
            </div>
            <div className="flex justify-center">
                <div className="lg:grid lg:grid-cols-3 lg:gap-4 w-4/5  ">
                    {
                        orders.map(order => <div key={order._id}>
                            <div className="bg-gray-300 p-4 shadow-md h-full order-details mb-4 lg:mb-0 flex flex-col justify-between">
                                <div className="mb-8">
                                    <h1><span>Order No</span> - <small>{order._id}</small></h1>
                                    <h1><span>Name</span>: {order.username}</h1>
                                    <h1><span>Email</span>: <small>{order.email}</small></h1>
                                    <p><span>Address</span>: {order.address}</p>
                                    <p><span>Selected Place</span>: {order.place}</p>
                                    <p><span>Tour Duration</span>: {order.duration} Days</p>
                                    <p><span>Total Person</span>: {order.numberOfPerson}</p>
                                    <p><span>Status </span>: {order.status}</p>
                                </div>
                                <button className="custom-danger-btn shadow-md" onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default MyOrders;