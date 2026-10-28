
import React from "react"
import products from "./data/Products"
import ProductCard from "./components/ProductCard"
import { CartProvider } from "./context/CartContext"
import Cart from "./Pages/Cart";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import CheckOut from "./Pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Payment from "./Pages/Payment";

// function CartButton(){
//      const navigate=useNavigate();
//      return(
//         <button  onClick={()=>navigate("/cart")}>My Cart</button>
//      );

// }
function App() {

   const [searchTerm, setSearchTerm]=useState("");
   
   const filteredProduct=products.filter((product)=>String(product.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
 return(
  <>
 
  <BrowserRouter>
  
  <CartProvider>
   <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
   <main class="main">
    <Routes>
        <Route path="/" element={
      <div className="product-grid" id="products">
     {filteredProduct.map((product)=>(
    <ProductCard key={product.id} product={product} />
               ))}
          </div>
           }
        />
  <Route path="/cart" element={<Cart/>}/> 
  <Route path="/payment" element={<Payment/>}/>
  <Route path="/checkout" element={<CheckOut/>}/>   
  
 </Routes>
</main>
 <Footer />
 </CartProvider>
 </BrowserRouter>
  </>
 )
}

export default App
