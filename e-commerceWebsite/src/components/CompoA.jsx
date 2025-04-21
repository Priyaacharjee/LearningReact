import React from 'react'
import CompoB from './CompoB'

const CompoA = () => {
    // const user={
    //     name:'Priya',
    //     email:'priyaacharjee2001@gmail.com'
    // }
    return (
        <div className='max-w-5xl m-auto'>
            <h1>CompoA</h1>
            <CompoB/>
        </div>
    )
}

export default CompoA