import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://secret-meadow-63118.herokuapp.com/orders/`
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setOrders(data)
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
        <div className="py-20">
            <h1 className="text-5xl font-bold text-center custom-color my-10">Manage All Orders</h1>
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
                                    <p><span>Tour Duration</span>: {order.duration} Hours</p>
                                    <p><span>Total Person</span>: {order.numberOfPerson}</p>

                                </div>
                                <div className="flex ">
                                    <button className="custom-btn" onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                                    {/* <button className="custom-btn" onClick={() => handleUpdateOrder(order._id)}>Update</button> */}
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;