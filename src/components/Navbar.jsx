import React, { useContext } from "react"
import "./Navbar.css";
import { Link } from "react-router-dom";
import{useLocation}from"react-router-dom"
import CartContext from "../context/CartContext";

function Navbar({searchTerm,setSearchTerm}){
    const location=useLocation();
    const { cart }= useContext(CartContext);
    return(
        <nav class="navbar">
             <h1>Shop<span>Hub</span></h1> 
            
            {location.pathname==="/" && (
             <div class="search">
                <input type="text" placeholder="Search products...." value={searchTerm} onChange={(e)=>
                setSearchTerm(e.target.value)

                }/>      
              <button>Search</button>
             </div>
             )}
        <div class="nav-links">
           <Link to="/">Home</Link>
           <a href="/#products">Products</a>
          {/* <Link to="/cart">My Cart</Link> */}
          <Link to="/cart">🛒 My Cart {cart.length>0 && `(${cart.length})`}</Link> 
        </div>
       </nav>
      
    );
}
export default Navbar;