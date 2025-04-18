import React, { useState } from 'react'

const Profile = ({ name, address, email }) => {
    const[count,setCount]=useState(0);
    return (
        <div className="border border-zinc-700">
            <h1>Profile Functional</h1>
            <h3>Name:{name}</h3>
            <h3>Address: {address}</h3>
            <h3>Email:{email}</h3>
            <h3>Count -{count}</h3>
            <button onClick={() => {
              setCount(count+1)
            }}>Increment</button>
        </div>
    )
}

export default Profile