import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {     //option-1
    //const cart = props.cart; //option-2
    //const {cart} =props;     //option-3
    
    let totalPrice = 0;
    let totalShipping = 0;
    let totalQuantity = 0;
    for(const product of cart){
        // if(product.quantity === 0){ //option -1
        //     product.quantity = 1;
        // }
       // product.quantity = product.quantity || 1; option -2
        totalPrice = totalPrice + product.price*product.quantity;
        totalShipping = totalShipping + product.shipping;
        totalQuantity = totalQuantity + product.quantity;
    }
    const tax = totalPrice * 7 /100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
             <h3>Order Summary</h3>
             <p>Selected Items: {totalQuantity}</p>
             <p>Total Price: ${totalPrice}</p>
             <p>Shipping Charge: ${totalShipping}</p>
             <p>Tax: ${tax.toFixed(2)}</p>
             <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;