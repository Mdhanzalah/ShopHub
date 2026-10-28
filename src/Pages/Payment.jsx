
import React, { useState } from "react";
import "./Payment.css";



function Payment(){
    const [method,setMethod]=useState(" ");
    const [paymentSuccess, setPaymentSuccess]=useState(false );

    const handlePayment=()=>{
        const option={
            key :"rzp_test_Tqaym8Ao7KRIyr",
            amount:129900,
            currency:"INR",
            name:"ShopHub",
            description:"Test Payment",
            handler:function (response){setPaymentSuccess(true);},
   

            theme:{color:"#3399cc"}
             

            
        };
        const rzp=new window.Razorpay(option);
        rzp.open();
    };


    return(
    <div class="payment">
        <h2>Complete Your Purchase ! </h2>
        <p>select payment method</p>
        <button onClick={handlePayment}>Pay with Razorpay</button>
        <div class="paymentMethod">
            <label>
                <input type="radio" name="payment" value="upi"  onChange={()=>setMethod("upi")}/>
                UPI
            </label>
              <label>
                <input type="radio" name="payment" value="card" onChange={()=>setMethod("card")}/>
                Credit/Debit Card
            </label>
              <label>
                <input type="radio" name="payment" value="netbanking" onChange={()=>setMethod("netbanking")}/>
                Net Banking
            </label>
            
            

        </div>
        {method==="upi" &&(
            <div>
                <h3>Enter UPI ID</h3>
                <input type ="text" placeholder="abcd@upi"/>
            </div>)}
             {method==="card" &&(
            <div>
                <h3>Enter Card Details</h3>
                <input type ="text" placeholder="Card Number"/>
                <input type="text" placeholder="MM/YY"/>
                <input type="pasword" placeholder="CVV"/>
            </div>)}
            {method==="netbanking" &&(
                <div>
                    <h3>Select Bank</h3>
                    <select>
                       <option value="">
                        Choose Bank
                       </option>
                       <option>SBI Bank</option>
                       <option>PNB Bank</option>
                       <option>HDFC Bank</option>
                       <option>ICICI Bank</option>
                       <option>UBI Bank</option>
                    </select>
                </div>
            )}
    {paymentSuccess && (
        <div class="success">
         
          <h2>✅ Payment Successful!</h2>
            <p>Your ShopHub order has been placed Successfully.</p>
        </div>
    )}
    </div>
    )
}
export default Payment;