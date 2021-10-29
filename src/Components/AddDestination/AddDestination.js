import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './addDestination.css'

const AddDestination = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/destinations', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('New Destination added');
                    reset();
                }
            })
            .catch(error => {
                console.log(error);
            });
    };



    return (
        <div className="py-20">
            <h1 className="font-bold text-5xl text-center custom-color mb-10">Add a Destination</h1>
            <div className="add-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="custom-border p-1 mb-2" {...register("name", { required: true, maxLength: 20 })} placeholder="Destination Name" />
                    <input className="custom-border p-1 mb-2" {...register("image")} placeholder="Image Url (check the url properly before submitting)" />
                    <textarea className="custom-border p-1 mb-2" {...register("description")} placeholder="Description" />


                    <input className="custom-btn" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDestination;