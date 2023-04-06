import {React,useContext} from 'react';
import { PRODUCTS } from '../../products';
import {ShopContext} from '../../context/shop-context';
import { CarItem} from './cart-item';
import './cart.css';
import  { useNavigate} from 'react-router-dom';

export const Cart =()=>{
    const {getTotalCartAmount,carttItems }=useContext(ShopContext);
    const totalAmount =getTotalCartAmount();
    const navigate = useNavigate();
    return (
        <div className='cart'>
            <div><h1>Your Cart Items </h1></div>
            <div className='cartItems'>
            { PRODUCTS.map((product)=>
                {
                    if (carttItems[product.id]!=0){
                        return <CarItem data={product}/>
                    }
                }
                )}
            </div>
            {totalAmount>0 ?(
            <div className='checkout'>
                
                           <p>Subtotal: ${totalAmount}</p>
              <button onClick={()=>navigate("/")}> COntinue Shopping </button>
              <button> checkout </button>
            </div>):
            (<h1>Your Cart is Empty</h1>)}
        </div>
    )
};