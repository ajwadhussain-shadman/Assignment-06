import React from 'react';
import cartImg from '../../assets/products/shopping-cart.png'
import { toast } from 'react-toastify';
const Cart = ({cart,setCart}) => {
    const totalPrice=cart.reduce((total,i)=>total+i.price,0);
    
    const handleCheckOut=()=>{
        toast("checked out");
        setCart([]);
        
    }

    const handleDelete=(product)=>{
         toast.success("product removed from cart");
       const newCart=cart.filter(i=>i.id!=product.id);
       setCart(newCart);
    }
    const isEmpty=cart.length;
    return (
        <div className='md:w-3/4 mx-auto border border-[#F2F2F2] rounded-2xl p-10 mt-10 space-y-6'>
           <h2 className='font-bold text-[#101727] text-2xl'>Your Cart</h2>
                  { cart.map(product=>{
                    return(
<div className='flex justify-between items-center bg-[#F9FAFC] rounded-2xl p-3 md:p-5'>
            <div className='flex gap-4'>
             <div className='w-10 h-10 md:w-15 md:h-15 flex justify-center items-center border rounded-full border-[#F2F2F2]'>
                 <img className='w-5 h-5 md:w-8 md:h-8' src={product.image} alt="" />
             </div>
             <div>
                <h2 className='text-[#101727] font-semibold md:text-xl'>{product.name}</h2>
                <p className='text-[#627382]'>$ {product.price}</p>
             </div>
            </div>
            <div>
           <button onClick={()=>handleDelete(product)} className='cursor-pointer text-[#FF3980] font-bold text-[12px] md:text-[16px]'>Remove</button>
            </div>
           </div>
                    )
                  })}
              {
                isEmpty==0 && <div className='flex flex-col gap-4 justify-center items-center mx-auto'>
                    <img src={cartImg} className=' w-6' alt="" />
                    <p className='text-xl font-semibold'> Your cart is Empty</p>
                </div>
              }    
           {
            isEmpty!==0 && <div className='space-y-4'>
                 <div className='flex justify-between items-center'>
                <p className='text-[#627382]'>Total:</p>
                <h3 className='font-bold text-2xl text-[#101727]'>${totalPrice}</h3>
            </div>
           <button onClick={handleCheckOut} className='w-full rounded-full text-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold btn'>Proceed to Checkout</button>
            </div>
           }
        </div>
    );
};

export default Cart;