import React from 'react';

const Pricing = () => {
    return (
        <div className=' w-11/12 md:w-3/4 md:py-[120px] py-[60px] mx-auto'>
            <div className='text-center'>
                <h2 className='font-extrabold text-3xl md:text-5xl text-[#101727]'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382] mt-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            {/* payments card section */}
            <div className='flex md:flex-row flex-col gap-[30px] justify-center items-center mt-10'>
                {/* card -1 */}
                <div className='p-6 border border-[#F2F2F2] space-y-6 w-[380px] rounded-2xl'>
                    <div>
                        <h2 className='font-bold text-2xl text-[#101727]'>Starter</h2>
                        <p className='text-[#627382] mt-2'>Perfect for getting started</p>
                    </div>
                    <div><span className='font-bold text-[40px] text-[#101727]'>$0</span><span className='text-[#627382] text-xl
                 '>/month</span></div>

                    <div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] '>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] '>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] '>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] '>1 project per month</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='mt-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn w-full rounded-full text-white font-bold'>Get Started Free</button>
                    </div>

                </div>

                {/* 2nd card */}

                <div className='p-6 border border-[#F2F2F2] space-y-6 w-[380px] rounded-2xl relative bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
                    <p className='badge text-[#BB4D00] bg-[#FEF3C6] absolute  -top-3 left-[130px] md:left-1/3 '>Most Popular</p>
                    <div>
                        <h2 className='font-bold text-2xl '>Pro</h2>
                        <p className='mt-2 text-purple-100'>Best for professionals</p>
                    </div>
                    <div><span className='font-bold text-[40px]'>$29</span><span className='text-xl
                 '>/month</span></div>

                    <div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className=''>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className=''>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className=''>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className=''>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className=''>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className=''>Advanced analytics</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className=' bg-white btn w-full rounded-full font-bold'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold'>Start Pro Trial</span></button>
                    </div>

                </div>

                {/* 3rd Card */}

                <div className='p-6 border border-[#F2F2F2] space-y-6 w-[380px] rounded-2xl'>
                    <div>
                        <h2 className='font-bold text-2xl text-[#101727]'>Enterprise</h2>
                        <p className='text-[#627382] mt-2'>For teams and businesses</p>
                    </div>
                    <div><span className='font-bold text-[40px] text-[#101727]'>$99</span><span className='text-[#627382] text-xl
                 '>/month</span></div>

                    <div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] '>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] '>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] '>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] '>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] '>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] '>Custom branding</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn w-full rounded-full text-white font-bold'>Contact Sales</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Pricing;