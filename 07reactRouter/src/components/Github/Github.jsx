import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {
    const data=useLoaderData();

    // useEffect(() => {
    //   fetch('https://api.github.com/users/priyaacharjee').then(response=>response.json()).then(data=>{
    //     console.log(data);
    //     setData(data);
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers} 
    <img  src={data.avatar_url} alt="Github Picture" width={300} /></div>
  )
}

// export const githubInfoLoader=async()=>{
//   await fetch('https://api.github.com/users/priyaacharjee')
//   return response.json()
// }

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/priyaacharjee');
  
  if (!response.ok) {
      throw new Error('Failed to fetch data from GitHub');
  }
  
  const data = await response.json();
  return data;
};
