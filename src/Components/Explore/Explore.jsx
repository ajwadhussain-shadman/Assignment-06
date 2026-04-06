import React from 'react';

const Explore = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-[60px] md:py-[120px]'>
            <div className='w-11/12 md:w-3/4 mx-auto text-white text-center space-y-10'>
            <div>
                <h1 className='font-extrabold text-[40px] '>Ready to Transform Your Workflow?</h1>
                <p className='text-[16px]'>Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>
            </div>
            <div className='space-y-4'>
                <div className='space-x-4'>
                     <button className=' bg-white btn  rounded-full font-bold'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold'>Explore Products</span></button>
                     <button className='btn bg-transparent text-white border-white rounded-full'>View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
            </div>
        </div>
    );
};

export default Explore;