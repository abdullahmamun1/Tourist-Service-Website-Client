import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const [destination, setDestiantion] = useState({})
    const { user } = useAuth();
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();

    useEffect(() => {
        const url = `https://secret-meadow-63118.herokuapp.com/destinations/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDestiantion(data))
    }, [])

    const onSubmit = data => {
        console.log(data);
        axios.post('https://secret-meadow-63118.herokuapp.com/orders', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Your order has been completed successfully. Waiting to be approved');
                    reset();
                    history.push(`/orders`)
                }
            })
            .catch(error => {
                console.log(error);
            });
    };



    return (
        <div className="py-20">
            <div>
                <h1 className="text-5xl font-bold text-center custom-color pb-20">Place Your Order Here</h1>
            </div>
            <div className="flex items-center">
                <div className="w-1/2 mx-8">
                    <img src={destination.img} alt="" />
                </div>
                <div className="w-1/2 mx-8">
                    <h1 className="text-4xl"><span className="font-bold">Country Name</span>: {destination.name} </h1>
                    <p>{destination.description}</p>
                </div>
            </div>
            <div className="py-20">
                <h1 className="text-center font-semibold text-3xl custom-color">Provide us with your details</h1>
            </div>
            <div className="add-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="custom-border p-1 mb-2" {...register("username")} defaultValue={user.displayName} placeholder="Your Name" />
                    <input className="custom-border p-1 mb-2" {...register("email")} placeholder="Email Address" defaultValue={user.email} />
                    <select className="custom-border w-3/5 p-1 mb-2" {...register("place", { required: true })} placeholder="Please Select your destination" >
                        <option value="" selected disabled>Please Select your destination</option>
                        <option value={destination.name}>{destination.name}</option>
                    </select>
                    <input className="custom-border p-1 mb-2" {...register("address", { required: true })} placeholder="Address" />
                    <input className="custom-border p-1 mb-2" type="number" {...register("duration", { required: true })} placeholder="Tour Duration (in Days)" />
                    <input className="custom-border p-1 mb-2" type="number" {...register("numberOfPerson", { required: true })} placeholder="Total Person" />
                    <input className=" p-1 mb-2" {...register("status")} defaultValue="Pending" readOnly />



                    <input className="custom-btn" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default PlaceOrder;