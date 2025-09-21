import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToStoredCart, getStoreCart, removeFromCart } from "../../Utilities/localstorage";
import Cart from "../cart/Cart";

const Bottles = ({ battlesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottles = use(battlesPromise);

  // useEffect
  useEffect(() => {
    const storedCartIds = getStoreCart();
    // console.log(storedCartIds, bottles);

    const storedCart = [];

    for (const id of storedCartIds) {
      // console.log(id);
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    setCart(storedCart);
  }, [bottles]);

  const handelAddToCart = (bottle) => {
    // console.log('bottle will be add to the card', bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);

    // save to bottle id in the storage
    addToStoredCart(bottle.id);
  };
  const handelRemoveFromTocart = (id) => {
    console.log("remove from the cart", id);

    const reaminingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(reaminingCart);
    removeFromCart(id)
  };

  return (
    <div>
      <h3>Bottles : {bottles.length}</h3>
      <p>Added to cart: {cart.length}</p>
      <Cart handelRemoveFromTocart={handelRemoveFromTocart} cart={cart}></Cart>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handelAddToCart={handelAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
