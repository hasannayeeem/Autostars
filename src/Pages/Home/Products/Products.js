import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../../Hooks/useProductDetail';
import ProductDetails from '../../Home/ProductDetails/ProductDetails';

const Products = () => {
    const {productId} = useParams();
    return (
        <div>
            <ProductDetails></ProductDetails>
        </div>
    );
};

export default Products;