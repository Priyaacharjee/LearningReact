import React, { useState } from 'react'
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, "Password must be atleast 6 characters.")
})

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });


    const [error, seterror] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        const result = loginSchema.safeParse(formData);
        if (!result.success) {
            const errorField = result.error.formErrors.fieldErrors;
            seterror(errorField);
            return;
        }
        console.log(formData);
        //api call start    
    }

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({ ...formData, [name]: value })

    }
    return (
        <div className='flex items-center justify-center w-full h-[80vh] bg-gray-400'>
            <form onSubmit={submitHandler} className="flex flex-col gap-10 bg-white p-10 rounded-lg shadow-md w-[40%]" action="">
                <div>
                    <input value={formData.email} name={"email"} onChange={changeHandler} className='border border-black rounded-md w-full' type="email" placeholder='Email' />
                    <span className='text-xs text-red-600'>{error && error.email}</span>
                </div>
                <div>
                    <input value={formData.password} name={"password"} onChange={changeHandler} className='border border-black rounded-md w-full' type="password" placeholder='Password' />
                    <span className='text-xs text-red-600'>{error && error.password}</span>
                </div>
                <button className='py-2 rounded-md text-white bg-purple-600'>Login</button>
            </form>
        </div>
    )
}

export default Login