import { useContext } from "react";
import CartContext from "../context/CartContext";


function ProductCard({product}){
    const {cart,setCart}=useContext(CartContext);
    function addToCart(){
        setCart([...cart,product]);
    }
    return(
        <>
        <div className="product-card">
            <img src={product.image} alt={product.name} 
            style={{ width:"100%",height:"220px",objectFit:"fill",display:"block"}} />
            <h2>{product.name}</h2>
            <p>Price : Rs.{product.price}</p>
             <p>Category : {product.category}</p>
             <button onClick={addToCart}>Add to Cart</button>
        </div>
        </>
    )
}
export default ProductCard;