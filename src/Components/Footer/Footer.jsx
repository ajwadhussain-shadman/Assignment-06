import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
    return (
        <div className='bg-[#101727]  pt-[60px] md:pt-[120px] pb-[30px]'>
            <div className='w-11/12 md:w-3/4 mx-auto text-white/70 grid grid-cols-2 gap-6 md:flex justify-between'>
            
            <div className='space-y-4'>
            <h1 className='font-bold text-3xl text-white'>DigiTools</h1>
            <p className='font-light text-sm'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
            </div>

            <div className='space-y-4'>
                <h2 className='text-xl text-white'>Product</h2>
                <p className='text-sm'>Features</p>
                <p className='text-sm'>Pricing</p>
                <p className='text-sm'>Templates</p>
                <p className='text-sm'>Integrations</p>
            </div>
            <div className='space-y-4 flex flex-col'>
                <h2 className='text-xl text-white'>Company</h2>
                <a className='text-sm'>About</a>
                <a className='text-sm'>Blog</a>
                <a className='text-sm'>Careers</a>
                <a className='text-sm'>Press</a>
            </div>
            <div className='space-y-4 flex flex-col'>
                <h2 className='text-xl text-white'>Resources</h2>
                <a className='text-sm'>Documentation</a>
                <a className='text-sm'>Help Center</a>
                <a className='text-sm'>Community</a>
                <a className='text-sm'>Contact</a>
            </div>

               <div>
                <h2 className='text-xl text-white'>Social Links</h2>
                <div className='flex gap-3 mt-4'>
                   <a href="" className='w-10 h-10 rounded-full bg-white flex items-center justify-center'> <RiInstagramFill className='text-gray-800 text-xl' /></a>
                   <a href="" className='w-10 h-10 rounded-full bg-white flex items-center justify-center'> <FaSquareFacebook className='text-gray-800 text-xl' /></a>
                   <a href="" className='w-10 h-10 rounded-full bg-white flex items-center justify-center'> <BsTwitterX className='text-gray-800 text-xl' /></a>
                 
                </div>
                </div> 
                  
            </div>
            <div className='w-11/12 md:w-3/4 mx-auto text-white mt-[80px]'>
                  <hr className='opacity-10' />
                  <div className='flex justify-between mt-[30px] text-[#FAFAFA]/50 text-sm'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className=' flex justify-between gap-2 md:gap-4'>
                        <a href="">privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookies</a>
                    </div>
                  </div>
            </div>
        </div>
    );
};

export default Footer;