import React, { useContext } from "react";
import './shop.css';
import {ShopContext} from '../../context/shop-context';

export const Product=(props)=>{

    const {id,productName,price,productImage} = props.data;

    const { addToCart ,carttItems }=useContext(ShopContext);

    const cartItemAmount=carttItems[id];

    return <div className="product">

        <img src={productImage} alt="" width={200} height={250}/>
        <div className="description">
            
            <p><b>{ productName }</b></p>
            <p><b>{ price }</b></p>
            <button className="addToCartBttns" onClick={()=>addToCart(id)}>Add to Cart {cartItemAmount>0 &&<>({cartItemAmount}) </> }</button>

        </div>
    </div>
};