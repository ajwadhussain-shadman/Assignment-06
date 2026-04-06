import React, { useState } from 'react';
import cartImg from '../../assets/products/shopping-cart.png'
import { IoCloseSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ cart, setCart }) => {

  const links=["Products","Features","Pricing","Testimonials","FAQ"];
  
  const [click,setClick]=useState(false);
  return (
    <div className={`border border-[#e3e8eb] border-x-0 ${click? "h-50": ""}`}>
      <div className=' w-11/12 md:w-3/4 mx-auto flex justify-between items-center py-4'>

        <div className='flex gap-3 items-center'>
          <span onClick={()=>setClick(!click)} className='flex'>
            {click ?<IoCloseSharp className='md:hidden' />:<IoMenu className='md:hidden' /> }
            <ul className={`md:hidden  grid  rounded-2xl  p-4 text-center absolute ${click? "top-15": "-top-64"}`}>
              {
            links.map(link=>{
            return(
            <a className=' font-semibold underline' href="">{link}</a>)})
          }
            </ul>
            
          </span>
          <h1 className="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
        </div>
        <div className='md:flex hidden gap-8 list-none text-[#101727] font-semibold '>
      
          {
            links.map(link=>{
            return(
            <a href="">{link}</a>)})
          }
        </div>
        <div className='flex gap-4 items-center'>
         
         <div className='flex gap-4 items-center flex-col md:flex-row'>
          <div>
<div className='indicator'>
            <img className='object-contain' src={cartImg} alt="" />
            {cart.length!==0 && <span className="badge badge-sm indicator-item bg-red-400 text-white w-2 h-4">{cart.length}</span>}
          </div>
           <a  href="" className='text-[#101727] font-semibold ml-4'>Login</a>
          </div>
           
          <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full'>Get Started</button>
         </div>
        </div>

      </div>
    </div>
  );
};


export default Navbar;