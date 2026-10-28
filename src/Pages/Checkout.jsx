import { useContext } from "react"
import CartContext from "../context/CartContext";

import "../CSS/Checkout.css";
import { useNavigate } from "react-router-dom";




function CheckOut(){
    const {cart}=useContext(CartContext);
    const totalPrice=cart.reduce((total, item)=>total +Number(item.price) *(item.quantity || 1),0);

    const navigate=useNavigate();
    return(
       
        <div class="checkout-container">
            <h2>Checkout</h2>
            {cart.length===0?(<p>Your Cart is empty</p>):(
                <>
               {cart.map((item)=>(
                <div class="checkout-item" key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: Rs.{item.price}</p>
                    <p>Quantity:{item.quantity || 1}</p>
                    </div>
                ))}
                <h3  class="checkout-total">Total Price : Rs. {totalPrice}</h3>
                <button class="place-order-btn" onClick={()=>navigate("/payment")}>Place Order</button>
                </>
            )}
        </div>
        
    )
}

export default CheckOut