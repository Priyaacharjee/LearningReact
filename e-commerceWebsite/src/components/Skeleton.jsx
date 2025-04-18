import React from 'react'

const Skeleton = () => {
  return (
    <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 w-full h-40 object-cover mb-4'></div>
        <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 w-full h-40 object-cover mb-4'></div>
        <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 w-full h-40 object-cover mb-4'></div>
        <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 w-full h-40 object-cover mb-4'></div>
        <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 w-full h-40 object-cover mb-4'></div>
        <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 w-full h-40 object-cover mb-4'></div>
    </div>
  )
}

export default Skeleton