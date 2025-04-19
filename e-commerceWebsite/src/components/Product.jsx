import React from 'react'

const Product = ({image,title,price,description,rate}) => {
  return (
  <div>
    <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-xl mb-4"
    />
    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    <p className="text-sm text-gray-500 mb-2">{rate}</p>
    <p className="text-sm text-gray-500 mb-2">{description}</p>
    <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-indigo-600">{price}</span>
        <button className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors">
            Add to Cart
        </button>
    </div>
  </div>
  )
}

export default Product;

//Higher order component
export const HOF=(Product)=>{  
  return (props)=>{
    return(
        <div>
         <span className='bg-purple-800 text-white px-4 py-1 rounded-md'>Best Seller</span>
         <Product{...props}/>
        </div>
    )
  }
};
// const Component=HOF(Product);
// <Component product={product}/>