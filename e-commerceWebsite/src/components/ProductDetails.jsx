import React, { useEffect, useState } from 'react'
import Skeleton from './Skeleton';
import { useParams } from "react-router-dom";
import useGetSingleProduct from '../hook/useGetSingleProduct';
import { addItems } from '../store/cartSlice';
import {useDispatch} from "react-redux";


const ProductDetails = () => {

    // const [singleProduct, setSingleProduct] = useState(null);
    const { productId } = useParams();

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    //     const resData = await data.json();
    //     setSingleProduct(resData);
    // }

    const singleProduct=useGetSingleProduct(productId);  //custom hook
    const dispatch= useDispatch();

    if (singleProduct === null) {
        return <Skeleton />
    }

    const { image, title, description, price } = singleProduct;

    const handleCartItems=()=>{
        dispatch(addItems(singleProduct));
    }

    return (
        <div className='flex justify-center items-center w-full min-h-screen bg-gray-100'>
            <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 w-[30%]'>
                <img src={image} className='w-full h-40 object-cover rounded-xl mb-4' alt="" />
                <h1 className='text-lg font-semibold text-gray-800'>{title}</h1>
                <p className='text-sm text-gray-500 mb-2'>{singleProduct.rating.rate}</p>
                <p className='text-sm text-gray-500 mb-2'>{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-indigo-600">{price}</span>
                    <button onClick={handleCartItems} className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails