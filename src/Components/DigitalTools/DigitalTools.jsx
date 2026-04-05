import React, { use,useState } from 'react';
import Products from './Products/Products';
import Cart from './Cart';

const DigitalTools = ({productDataPromise,cart,setCart}) => {
     const productData=use(productDataPromise);
    const [tab,setTab]=useState("product");

    return (
        <div className='w-3/4 mx-auto py-30'>
            <div className='text-center space-y-4'>
                <h2 className='font-extrabold text-5xl'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-sm'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity. </p>
                {/* tabs */}
                {/* name of each tab group should be unique */}
               <div className='mx-auto w-62.5 '>
                 <div className="tabs tabs-box border rounded-full border-[#F6F6F6] bg-white">
                    <input type="radio" name="my_tabs_1" className={`tab w-30 rounded-full ${tab==="product" ?"bg-linear-to-r from-[#4F39F6] to-[#9514FA]  font-bold text-white shadow-md shadow-[#6107EC]/30":"text-black"} ` }aria-label="Products" defaultChecked
                     onClick={()=>setTab("product")}
                    />
                    <input type="radio" name="my_tabs_1" className={`tab w-30 rounded-full  ${tab==="cart" ?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold shadow-md shadow-[#6107EC]/30":"text-black"} `}aria-label={`cart(${cart.length})`} 
                     onClick={()=>setTab("cart")}
                    />
                </div>
               </div>
            </div>

           {tab==="product" &&  <Products productData={productData} cart={cart} setCart={setCart}></Products> }
            {tab==="cart" && <Cart cart={cart} setCart={setCart}></Cart>}

        </div>
    );
};

export default DigitalTools;