import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, Link } from 'react-router-dom';
import useProductDetail from '../../../Hooks/useProductDetail';
import './ProductDetails.css'

const ProductDetails = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    let { name, _id, img, description, supplierName, quantity, price } = product;

    const handleQuantity = (e) => {
        e.preventDefault();
        const newQuantity = e.target.quantity.value;
        console.log(newQuantity);
        quantity = parseInt(quantity) + parseInt(newQuantity);
        const url = `https://morning-harbor-53882.herokuapp.com/products/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify({quantity})
        })
        e.target.reset();
    };
    const handleDelivered = (e) => {
        e.preventDefault();
        quantity--;
        console.log(quantity);
        // send data to the server
        const url = `https://morning-harbor-53882.herokuapp.com/products/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify({ quantity })
        })
    };
    return (
        <div className="w-50 mx-auto my-5">
            <img className='w-100 mb-2' src={img} alt=""></img>
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}   </p>
            <p>Supplier: {supplierName}</p>
            <Link to={`/manageitems`}>
                <button className='btn btn-main me-4'>Manage Inventories</button>
            </Link>

                <form  
                    onSubmit={handleQuantity} 
                    className='d-inline-block'>
                    <input className='pb-1 input-text' placeholder='Quantity' name='quantity' type="number" />
                    <input className='btn btn-main' type="submit" value="Add Quantity" />
                </form>
                

            <Link to="">
                <button onClick={handleDelivered} className='btn btn-main ms-4 outline-none'>Delivered</button>
            </Link>
        </div>
    );
};

export default ProductDetails;