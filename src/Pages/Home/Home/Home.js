import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Inventory from '../Inventory/Inventory';
import Subscribe from '../Subscribe/Subscribe';
import Cetagories from './Cetagories/Cetagories';
import Content from './Content/Content';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useProducts([]);
    if (!products.length) {
        <Loading></Loading>
    }
    return (
        <div className=''>
            <PageTitle title="HOME"></PageTitle>
            <Banner></Banner>
            <div id='' className='container mb-2'>
                <h1 className='services-title mt-5 mb-4'>Inventory Items</h1>
                <div className='services-container '>
                    {
                        products.slice(0, 6).map(product => <Inventory
                            key={product._id}
                            product={product}
                        ></Inventory>)
                    }
                </div>
                <Link to="/inventories" className='py-3 mt-2 d-inline-block justify-content-end see_more_btn d-flex'>see more <FontAwesomeIcon className='mt-1 ms-1' icon={faRightLong} /></Link>
            </div>
            {/* <Inventories></Inventories> */}
            <Cetagories></Cetagories>
            <Subscribe></Subscribe>
            {/* <Content></Content> */}
        </div>
    );
};

export default Home;