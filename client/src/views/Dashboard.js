import {ProductContext} from '../contexts/ProductContext';
import {AuthContext} from '../contexts/AuthContext';
import { useContext, useReducer, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { authReducer } from '../reducers/authReducers'
import banner from '../assets/img/banner.png';
import Features from '../components/layout/Features';
import Lookbook from '../components/layout/Lookbook';
import React from 'react'
import ReactPlayer from 'react-player/youtube'

const Dashboard = () =>{    

    // Contexts
	// const {
	// 	authState: {
	// 		user: { username }
	// 	}
	// } = useContext(AuthContext)

    let body;
    // // context
    // const {
    //     productState: {products, productsLoading},
    //     getProducts
    // } = useContext(ProductContext);

    // useEffect(() => getProducts(), []);

    // let body;

    // if(productsLoading){
    //     body = (
	// 		<div className='d-flex justify-content-center mt-2 spinner-container'>
	// 			<Spinner animation='border' variant='info' />
	// 		</div>
	// 	)
    // }
    
    body = (
        <>
            <img 
                className='banner'
                src= {banner} > 
            </img>

            <h4 className='mt-4'>BST SUIT MỚI</h4>

            <div className="mt-2 mb-2 wrapper">
                <div className="row">
                    <Features />
                </div>
            </div>

            <h4 className='mt-4'>3H STORE</h4>

            <div className="wrapper">
                <ReactPlayer width={1170} height={600} url='https://youtu.be/qkM2o_1xl4o' />
            </div>

            <h4 className='mt-4'>LOOKBOOK</h4>

            <div className="mt-2 mb-2 wrapper">
                <div className="row">
                    <Lookbook />
                </div>
            </div>
            
		</>
    )
    
    return (
		<div className='landing-inner bg-white'>
			{body}
		</div>
	)
}

export default Dashboard;