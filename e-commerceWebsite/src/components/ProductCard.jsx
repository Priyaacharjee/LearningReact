import React from 'react'
import productList from '../utils/constant'

const ProductCard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productList.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-indigo-600">{product.price}</span>
              <button className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCard
