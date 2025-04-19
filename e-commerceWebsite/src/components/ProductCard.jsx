import React from 'react'
// import productList from '../utils/constant'
import { useState } from 'react'
import { useEffect } from 'react';
import Skeleton from './Skeleton';
import { Link } from "react-router-dom"
import Product, { HOF } from './Product';

const ProductCard = () => {

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [allProducts, setallProducts] = useState([]);
    const [counter, setCounter] = useState(0);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchData();
        // const timer= setInterval(()=>{
        //    console.log('fn component');       
        // },1000);

        // return()=>{
        // clearInterval(timer);
        // }
    }, [])  //callback funnc,array dependency=> useEffect hook has

    const fetchData = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const resData = await data.json();
        setFilteredProducts(resData);
        setallProducts(resData);
    }
    const topRatedProducts = () => {
        const topRated = allProducts.filter(product => product.rating.rate >= 4.2);
        setFilteredProducts(topRated);
    }
    const Counter = () => {
        if (counter >= 10) {
            setCounter(10);
        } else {
            setCounter(counter + 1);
        }
    }

    const HOFComponent = HOF(Product); //This HOF is a higher order component

    //conditional rendering
    // if(filteredProducts.length===0){
    //     return <Skeleton/>
    // }
    return allProducts.length === 0 ? <Skeleton /> : (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className='flex justify-center items-center '>
                <input className='border border-black w-[15%]' type="text" onChange={(e) => setSearch(e.target.value)} value={search} />

                <button className='bg-purple-700 align-middle text-white text-center font-bold rounded-md h-auto w-[5%] ml-5 shadow-md hover:shadow-xl  hover:bg-pink-700 transition-shadow duration-300' onClick={() => {
                    const filteredData = allProducts.filter((product) => {
                        return product.title.toLowerCase().includes(search.toLowerCase());

                    });
                    setFilteredProducts(filteredData);
                }}>Search</button>

                <button
                    className='bg-gray-600 text-white font-bold rounded-md ml-4 px-3 py-1 hover:bg-gray-800'
                    onClick={() => {
                        setFilteredProducts(allProducts);
                        setSearch("");
                    }}
                >
                    Reset
                </button>

            </div>
            <div>
                <button onClick={topRatedProducts} className='bg-purple-700 text-white text-center font-bold rounded-md h-auto w-72 mt-4 shadow-md hover:shadow-xl transition-shadow duration-300'>
                    Show the highest rating products
                </button>
            </div>
            <div>
                <button onClick={Counter} className='bg-purple-700 align-middle text-white text-center font-bold rounded-md h-auto w-72 shadow-md hover:shadow-xl transition-shadow duration-300 '>
                    count {counter}
                </button>
            </div>
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Products</h1>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map(product => (
                    <Link
                        key={product.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
                        to={`/product/${product.id}`}>
                        {
                            product.rating.rate >= 4 ? <HOFComponent image={product.image}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                rate={product.rating.rate} /> : 
                                <Product
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                rate={product.rating.rate} />
                        }
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProductCard

