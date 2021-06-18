import React from 'react'
import { Link } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Table from './Table';
const Cart = () => {
	 const { cart } = useSelector((state) => state.StoreData);
	 

  // const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   let price = 0;

  //   cart.forEach((item) => {
  //     price += item.qty * item.price;
  //   });

  //   setTotalPrice(price);
  // }, [cart, totalPrice, setTotalPrice]);
    return (
        <div className="container" style={{marginTop:"80px"}}>
            <h1>Cart</h1>
			
            <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>Product</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

            {

              cart.map((item)=>{

                return <Table cartproduct={item}/>
                
              })

            }
           
           </tbody>
  </table>
			
            <Link to="/" className="btn btn-primary">back</Link>
        </div>
    )
}

export default Cart
