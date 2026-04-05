import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
const ProductCard = ({ product, cart, setCart }) => {
    const [btnTxt, setBtnTxt] = useState("Buy");
const isTheir=cart.find(i=>i.id===product.id);
    const btnState = () => {
        setBtnTxt("added")
        
        if(isTheir) return;
        setCart([...cart, product]);
        console.log(cart);
    }

    return (
        <div className='p-6 border border-[#F2F2F2] rounded-2xl'>
            {/* Top part */}
            <div className='flex justify-between'>
                <div className='object-contain w-15 h-15 border border-[#f2f2f2] rounded-full flex items-center justify-center'><img src={product.image} className='object-contain w-[32px] h-[32px]' alt="" /></div>

                {/* badge */}

                {product.tag === "Best Seller" && <p className='bg-[#FEF3C6] max-w-23.5 max-h-7.5 text-[#BB4D00] text-sm py-1.5 px-3 rounded-full'>{product.tag}</p>}
                {product.tag === "Popular" && <p className='bg-[#E1E7FF] max-w-23.5 max-h-7.5 text-[#9514FA] text-sm py-1.5 px-3 rounded-full'>{product.tag}</p>}
                {product.tag === "New" && <p className='bg-[#DBFCE7] max-w-23.5 max-h-7.5 text-[#0A883E] text-sm py-1.5 px-3 rounded-full'>{product.tag}</p>}
            </div>
            <div className='space-y-4'>
                <h2 className='text-[#101727] font-bold text-2xl'>{product.name}</h2>
                <p className='text-[#627382] text-[16px] w-full'>{product.description}</p>
                <h2><span className='text-[#101727] font-bold text-2xl'>${product.price}</span>/{product.period}</h2>
                <div>
                    {
                        product.features.map(ft => {
                            return (
                                <div className='flex space-y-2 items-center gap-2 justify-start'>
                                    <FaCheck className='text-[#30B868]' />
                                    <p className='text-[#627382] text-[16px]'>{ft}</p>
                                </div>

                            )
                        }
                        )
                    }
                </div>
                <button type='button' onClick={btnState} className={`btn text-white w-full rounded-full ${!isTheir ? " bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-green-500"} font-bold`}>{!isTheir ? "Buy Now" : "added to cart"}</button>
            </div>

        </div>
    );
};

export default ProductCard;