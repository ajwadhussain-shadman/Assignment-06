import React from 'react';
import cardImg1 from "../../assets/products/user.png"
import cardImg2 from "../../assets/products/package.png"
import cardImg3 from "../../assets/products/rocket.png"
const GettingStarted = () => {
    return (
        <div className='bg-[#F9FAFC] py-[60px] md:py-[120px]'>
            <div className='w-11/12 md:w-3/4 mx-auto'>
              <div className='text-center space-y-4' >
                 <h1 className='font-extrabold text-3xl  md:text-5xl'>Get Started in 3 Steps</h1>
               <p className='text-[#627382]' >Start using premium digital tools in minutes, not hours.</p>
              </div>
              {/* Cards Section */}
              <div className='mt-10 flex gap-[30px] flex-col md:flex-row'>
                {/* 1st card */}
                  <div className='p-6 bg-white rounded-2xl border space-y-4 border-[#F1F1F1]'>
                    {/* badge */}
                    <div className='flex justify-end'>
                        <p className='w-10 h-10 flex justify-center items-center rounded-full text-white font-bold text-sm bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>01</p>
                    </div>

                     <div className='flex flex-col gap-4 justify-center items-center text-center'>
                         <div className='w-[100px] h-[100px] flex items-center justify-center bg-purple-100 rounded-full'>
                     <img src={cardImg1}  alt="" />
                   </div>
                   <h2  className='text-[#101727] font-bold text-2xl'>Create Account</h2>
                   <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>

                     </div>
                  </div>
                  {/* 2nd Card */}
                  <div className='p-6 bg-white rounded-2xl border space-y-4 border-[#F1F1F1]'>
                    {/* badge */}
                    <div className='flex justify-end'>
                        <p className='w-10 h-10 flex justify-center items-center rounded-full text-white font-bold text-sm bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>02</p>
                    </div>

                     <div className='flex flex-col gap-4 justify-center  text-center items-center'>
                         <div className='w-[100px] h-[100px] flex items-center justify-center bg-purple-100 rounded-full'>
                     <img src={cardImg2}  alt="" />
                   </div>
                   <h2  className='text-[#101727] font-bold text-2xl'>Choose Products</h2>
                   <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>

                     </div>
                  </div>

                  {/* 3rd card */}
                  <div className='p-6 bg-white rounded-2xl border space-y-4 border-[#F1F1F1]'>
                    {/* badge */}
                    <div className='flex justify-end'>
                        <p className='w-10 h-10 flex justify-center items-center rounded-full text-white font-bold text-sm bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>03</p>
                    </div>

                     <div className='flex flex-col gap-4 justify-center text-center items-center'>
                         <div className='w-[100px] h-[100px] flex items-center justify-center bg-purple-100 rounded-full'>
                     <img src={cardImg3}  alt="" />
                   </div>
                   <h2  className='text-[#101727] font-bold text-2xl'>Start Creating</h2>
                   <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>

                     </div>
                  </div>
              </div>
            </div>
        </div>
    );
};

export default GettingStarted;