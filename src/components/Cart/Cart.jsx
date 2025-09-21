import React from 'react';
import './Cart.css';

const Cart = ({cart, handelRemoveFromTocart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                    <button onClick={()=> handelRemoveFromTocart(bottle.id)}>❌</button>
                </div>)
            }
        </div>
    );
};

export default Cart;