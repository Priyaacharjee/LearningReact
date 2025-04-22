import React from 'react'
import { useSelector } from 'react-redux'
import { clearItems } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.cartItems);

    const dispatch=useDispatch();

    const clearCartItemsHandler=()=>{
        dispatch(clearItems());
    }
    return (
        <div className='max-w-5xl mt-10 m-auto'>
            <div className='flex justify-between mb-5'>
            <h1 className='font-bold text-2xl'>Cart -({cartItems.length})</h1>
            <button onClick={clearCartItemsHandler} className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors">Clear Cart</button>
            </div>
            
            {
                cartItems.map((item) => (
                    <div className='flex justify-center items-center w-full min-h-screen bg-gray-100'>
                        <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 w-[30%]'>
                            <img src={item.image} className='w-full h-40 object-cover rounded-xl mb-4' alt="" />
                            <h1 className='text-lg font-semibold text-gray-800'>{item.title}</h1>
                            <p className='text-sm text-gray-500 mb-2'>{item.rating.rate}</p>
                            <p className='text-sm text-gray-500 mb-2'>{item.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-indigo-600">{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart