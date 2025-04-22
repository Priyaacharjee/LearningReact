import React, { useMemo, useState } from 'react'
import { nthPrime } from '../utils/constant'

const Memo = () => {
    const[num,setNum]=useState(0);
    const[isDark,setIsDark]=useState(false);

    const cachedValue= useMemo(()=>nthPrime(num),[num])

    const ans=nthPrime(num);
    console.log(ans);
    
  return (
    <div className={`${isDark && "bg-gray-900 text-white"}max-w-4xl mx-auto border border-gray-400 mt-10 `}>
        <button onClick={()=>setIsDark(!isDark)} className='bg-blue-700 text-white rounded-md mt-3 ml-3 w-24'>Toggle</button>
        <h1 className='font-bold text-xl text-blue-400'>use memo</h1>
        <input className='border border-black' type="number" value={num} onChange={(e)=>setNum(e.target.value)} />
        <h1 className='text-blue-400'>Prime Number :{cachedValue}</h1>
    </div>
  )
}

export default Memo