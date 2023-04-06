import {React,useContext} from "react";
import './cart.css';
import {ShopContext} from '../../context/shop-context';

export const CarItem=(props)=>{
    const {id,productName,price,productImage} = props.data;
    const { carttItems ,addToCart,removeFromCart,updateCartItemCount}=useContext(ShopContext);
    return (
        <div className="cartItem">
            <img src={productImage}/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p><b>${price}</b></p>
                <div className="countHandler">
                    <button onClick={()=>removeFromCart(id)}> - </button>
                    <input value={carttItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
                    <button onClick={()=>addToCart(id)}> + </button>

                </div>
            </div>

        </div>
    )
}