import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Navbar = () => {
    const[btnName,setbtnName]=useState("Light");

    const cartItems= useSelector((store)=>store.cart.cartItems);


    const user=useContext(UserContext);
    
    useEffect(()=>{
      
    },[])

    return (
      <div className="flex items-center justify-between border-b border-black p-4">
        <h1>LOGO</h1>
        <ul className="flex gap-4">
          <Link to="/">HOME</Link>
          <Link to="/men">MEN</Link>
          <Link to="/women">WOMEN</Link>
          <Link to="/kid">KIDS</Link>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/grocery">GROCERY</Link></li>
          <li><Link to="/cart">CART ({cartItems.length})</Link></li>
          <li className="ml-16">{user.name}</li>
          <li><Link to="/memo">Memo</Link></li>
          <li><Link to="/ref">Ref</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <button className="bg-purple-700 text-white mr-10 rounded-lg font-bold w-[5%]" onClick={()=>{
            btnName==="Light"?setbtnName("Dark"):setbtnName("Light");
        }}>{btnName}</button>
      </div>
    )
}