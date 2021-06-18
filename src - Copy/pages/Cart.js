import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './../actions';
const Cart = () => {
	 const { cart } = useSelector((state) => state.StoreData);
	  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.qty * item.price;
    });

    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);
    return (
        <div className="container" style={{marginTop:"80px"}}>
            <h1>Cart</h1>
			
            {
            cart.map((item) => {
              return (
                <div key={item.id} >
                   
                    <img
                      
                      src={item.images[0].src}
                      alt="product"
                      style={{width:"80px", height:"80px"}}
                    />
                   
                  <div className="cart-sidebar__product-info">
                    <p className="cart-sidebar__product-name">{item.brand}</p>
                    <div className="cart-sidebar__prices">
                      <p className="cart-sidebar__product-qty">{item.price} </p>
                      
                      <p className="cart-sidebar__delete">
                        <button type="button"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >Delete </button>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
           }
			
			
            <Link to="/" className="btn btn-primary">back</Link>
        </div>
    )
}

export default Cart
