import React from 'react';
import cartImg from '../../assets/products/shopping-cart.png'
const Navbar = () => {
    return (
      <div className='border border-b-[#e3e8eb]'>
          <div className='w-3/4 mx-auto flex justify-between items-center py-4'>

          <div>
             <h1 className="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
            </div> 
            <div className='flex gap-8 list-none text-[#101727] font-semibold '>
              <li>Products</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </div>
            <div className='flex gap-4 items-center'>
              <img className='object-contain' src={cartImg} alt="" />
              <a href="" className='text-[#101727] font-semibold'>Login</a>
              <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full'>Get Started</button>
            </div>

        </div>
      </div>
    );
};


export default Navbar;