import React, { createContext, useState } from "react";
import { Product } from "../pages/shop/product";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let i=1;i<=PRODUCTS.length;i++){
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider=(props)=>{
    const [carttItems,setCartitems]=useState(getDefaultCart());
    const addToCart=(ItemId)=>{
        setCartitems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}));
    };
    const removeFromCart=(ItemId)=>{
        setCartitems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}));
    };

    const updateCartItemCount=(newAmount,ItemId)=>{
        setCartitems((prev)=>({...prev,[ItemId]:newAmount}));
    };

    const getTotalCartAmount=()=>{
        let totalAmount =0;
        
        for(const item in carttItems){
            if (carttItems[item]>0){
                let itemInfo =PRODUCTS.find((product)=>product.id===Number(item));
                totalAmount+=(carttItems[item]*itemInfo.price)
            }
    }
    return totalAmount;

    };




    const contextValue = {carttItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount};

   return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
   )
};