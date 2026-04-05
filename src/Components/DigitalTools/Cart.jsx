import React from 'react';
import cartImg from '../../assets/products/shopping-cart.png'
const Cart = ({cart,setCart}) => {
    

    const handleDelete=(product)=>{
       const newCart=cart.filter(i=>i.id!=product.id);
       setCart(newCart);
    }
    const isEmpty=cart.length;
    return (
        <div className='w-3/4 mx-auto border border-[#F2F2F2] rounded-2xl p-10 mt-10 space-y-6'>
           <h2 className='font-bold text-[#101727] text-2xl'>Your Cart</h2>
                  { cart.map(product=>{
                    return(
<div className='flex justify-between items-center bg-[#F9FAFC] rounded-2xl p-5'>
            <div className='flex gap-4'>
             <div className='w-15 h-15 flex justify-center items-center border rounded-full border-[#F2F2F2]'>
                 <img className='w-8 h-8' src={product.image} alt="" />
             </div>
             <div>
                <h2 className='text-[#101727] font-semibold text-xl'>{product.name}</h2>
                <p className='text-[#627382]'>$ {product.price}</p>
             </div>
            </div>
            <div>
           <button onClick={()=>handleDelete(product)} className='cursor-pointer text-[#FF3980] font-bold'>Remove</button>
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

           
        </div>
    );
};

export default Cart;