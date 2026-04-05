import React from 'react';

const UserData = () => {
    return (
        <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] '>
            <div className=' text-white  flex w-3/4 justify-between mx-auto py-15'>
            <div className='text-center space-y-3 border-r border-[#9514FA] w-98'>
                <h1 className='font-extrabold text-6xl'>50K+</h1>
                <p className='text-2xl font-medium text-shadow-fuchsia-50'>Active Users</p>
            </div>
            <div className='text-center space-y-3 border-r border-[#9514FA] w-98'>
                <h1 className='font-extrabold text-6xl'>200+</h1>
                <p className='text-2xl font-medium text-shadow-fuchsia-50'>Premium Tools</p>
            </div>
            <div className='text-center space-y-3 border-r border-[#9514FA] w-98'>
                <h1 className='font-extrabold text-6xl'>4.9</h1>
                <p className='text-2xl font-medium text-shadow-fuchsia-50'>Rating</p>
            </div>
        </div>
        </div>
    );
};

export default UserData;