import React from 'react';
import cartImg from '../../assets/products/shopping-cart.png'
const Navbar = ({ cart, setCart }) => {
  return (
    <div className='border border-b-[#e3e8eb]'>
      <div className='w-3/4 mx-auto flex justify-between items-center py-4'>

        <div>
          <h1 className="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
        </div>
        <div className='flex gap-8 list-none text-[#101727] font-semibold '>
          <li><a href="">Products</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">FAQ</a></li>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='indicator'>
            <img className='object-contain' src={cartImg} alt="" />
            {cart.length!==0 && <span className="badge badge-sm indicator-item bg-red-400 text-white w-2 h-4">{cart.length}</span>}
            
          </div>
          <a href="" className='text-[#101727] font-semibold'>Login</a>
          <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full'>Get Started</button>
        </div>

      </div>
    </div>
  );
};


export default Navbar;