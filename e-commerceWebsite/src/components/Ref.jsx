import React, { useState,useRef } from 'react'

const Ref = () => {
  const[y,setY]=useState(0);
  let x=0;

  const ref=useRef(0);  //ref={current:10}
  const ref2=useRef(null);

  const focusInputHandler=()=>{
    // ref2.current.focus(); //for focusing
    ref2.current.click(); //for manipulating anything by using click
  }

  return (
    <div className='max-w-4xl mx-auto border border-black mt-10'>
      <button className='bg-blue-500 rounded-md' onClick={()=>{
        x=x+1;
        console.log(x);
        
      }}>
       Increment
      </button>
      <h1 className='font-bold text-2xl'>x= {x}</h1>
      <button className='bg-blue-500 rounded-md' onClick={()=>{
        setY(y+1);
      }}>
       Increment
      </button>
      <h1 className='font-bold text-2xl'>State Y= {y}</h1>

      <button className='bg-blue-500 rounded-md' onClick={()=>{
        ref.current+=1;
        console.log("ref value=",ref.current);
        
      }}>
       Increment
      </button>
      <h1 className='font-bold text-2xl'>Ref= {ref.current}</h1> <br />
      <input type="file" ref={ref2} placeholder="fullname" className='border border-black' />
      <button onClick={focusInputHandler}>Click</button>
    </div>
  )
}

export default Ref