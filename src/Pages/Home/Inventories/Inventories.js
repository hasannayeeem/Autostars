import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useProducts from '../../../Hooks/useProducts';
import Loading from '../../Shared/Loading/Loading';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'
import { Link } from 'react-router-dom';

const Inventories = () => {
    const [products, setProducts] = useProducts([]);
    if(!products.length){
        <Loading></Loading>
    }
    return (
        <div id='' className='container mb-5'>
            <h1 className='services-title mt-5 mb-4'>Inventory Items</h1>
            <div className='services-container '>
            {
                products.map(product => <Inventory
                    key={product._id}
                    product={product}
                ></Inventory>)
            }
            </div>
        </div>
    );
};

export default Inventories;