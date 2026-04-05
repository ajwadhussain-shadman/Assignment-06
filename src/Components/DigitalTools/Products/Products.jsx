import React from 'react';
import ProductCard from './ProductCard/ProductCard';

const Products = ({ productData ,cart,setCart}) => {
    return (
        <div className='mt-10 grid  grid-cols-1 md:grid-cols-3 gap-7.5'>
            {/* ProductCard */}
        {
            productData.map(product=>{
                return(
                    <ProductCard key={product.id} product={product} cart={cart} setCart={setCart}></ProductCard>
                )
            })
        }
            
        </div>
    );
};

export default Products;