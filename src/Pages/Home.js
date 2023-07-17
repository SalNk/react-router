import { useState } from "react";
import ProductItem from "../Components/ProductItem";
import products from "../data/products";
export default function Home(){
    
    return(
        <>
            <div className="m-8 text-2xl">
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {
                        products.map(product => 
                            <ProductItem 
                                product={product} 
                                key={product.id}
                                
                                />
                                )
                    }
        
                </div>
            </div>
            
        </>
    );
}