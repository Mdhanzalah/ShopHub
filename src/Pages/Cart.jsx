import { useContext } from "react";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";


function Cart(){
    const {cart,setCart}=useContext(CartContext);
    const navigate=useNavigate();

    const removeItem=(id)=>{
        setCart(cart.filter((item)=>item.id!==id));
    };
    function increaseQuantity(id){
        setCart(
            cart.map((item)=>
                item.id===id ? {...item, quantity:(item.quantity || 1)+1} :item
            )
        );
    }
         function deccreaseQuantity(id){
        setCart(
            cart.map((item)=>
                item.id===id ? {...item, quantity:(item.quantity || 1)-1} :item
            )
        );
        
    }
    
    return(
        
        <>
        <div className="cart-container">
        <h2>My Cart</h2>
        <h3>Total Price: Rs. {cart.reduce((total,item)=>total + item.price *(item.quantity || 1),0)}</h3>
        <button className="checkout-btn" onClick={()=>navigate("/checkout")} disabled={cart.length===0}>Checkout</button>
       {cart.length===0?(<p>Your cart is Empty</p>):(
                                 
                                 <div className="cart-items">
                                { cart.map((item)=>(

                               <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <h3>{item.name}</h3>
                                    <p>Price:Rs.{item.price}</p>
                                    <p>Quantity :{item.quantity ||1}</p>
                                    <button onClick={()=>deccreaseQuantity(item.id)}>-</button>
                                    <span>{item.quantity || 1} </span>
                                    <button onClick={()=>increaseQuantity(item.id)}>+</button>
                                    <p>Category: {item.category}</p>
                            <button onClick={()=>removeItem(item.id)}>Remove</button>   
                                    </div> 
                                  ))}
                                  </div>
                              )}
                         
                  </div>
        </>
    );
}

export default Cart;