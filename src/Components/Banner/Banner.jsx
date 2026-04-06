import React from 'react';
import bannerImg from '../../assets/BannerImg/banner.png'
import badgeImg from '../../assets/BannerImg/Group 5.png'
import playbtnImg from '../../assets/BannerImg/Play.png'
const Banner = () => {
    return (
        <div className='w-3/4 mx-auto  md:flex  md:gap-15 justify-between items-center py-15'>
            <div className='space-y-4'>
                {/* badge */}
                <div className='flex gap-1 bg-[#E1E7FF] rounded-full px-4 py-2 max-w-73.5'>
                    <img className='w-4 object-contain' src={badgeImg} alt="" />
                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                </div>
                <h2 className='text-[#101727] font-extrabold text-4xl md:text-6xl'>Supercharge Your Digital Workflow</h2>
                <p className='text-[#627382FF] text-[18px]'>Access premium AI tools, design assets, templates, and productivity<br />
                    software—all in one place. Start creating faster today.
                    <br />
                    Explore Products
                </p>
                {/* buttons */}
                <div className='flex gap-4'>
                    {/* first button */}
                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-bold'>Explore Products</button>
                    {/* second button */}
                   <div className='flex border border-[#9514FA] rounded-full btn bg-white '>
                     <img src={playbtnImg} className='w-5 object-contain' alt="" />
                     <button className=' cursor-pointer border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent     font-bold'>Watch Demo</button>
                   </div>
                </div>
            </div>
            <div className='mt-6 md:mt-0'>
                <img src={bannerImg} className=' h-full' alt="" />
            </div>
        </div>
    );
};

export default Banner;