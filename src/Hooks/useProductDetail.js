import { useEffect, useState } from "react";

const useProductDetail = (productId) =>{
    const [product, setProduct] = useState({});
    useEffect( () =>{
        // const url = `http://localhost:8000/products/${productId}`;
        const url = `https://morning-harbor-53882.herokuapp.com/products/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));    
    }, [productId, product]);
    return [product, setProduct]
}

export default useProductDetail;