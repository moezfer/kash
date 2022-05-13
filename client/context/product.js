import React, { useState, createContext } from 'react'
const ProductContext=createContext();


const productProvider = ({children}) => {
    const [products,setProducts]=useState([]);

    
    
      
    
      return (
        <ProductContext.Provider value={[products,setProducts]}>
          {children}
        </ProductContext.Provider>
      );
   
    
    
}

export {ProductContext,productProvider} ;