import React from 'react'
import { removeFromCart } from './../actions';
import {  useDispatch } from 'react-redux';
const Table = ({cartproduct}) => {
	
    const dispatch = useDispatch();

    return (
      <>
        <tr>
        <td><img
                      
                      src={cartproduct.image}
                      alt="product"
                      style={{width:"50px", height:"50px"}}
                    /></td>
        <td>{cartproduct.name}</td>
        <td>{cartproduct.qty} X {cartproduct.price} <i class="fa fa-usd" aria-hidden="true"></i> </td>
        <td><button type="button" className="btn btn-sm btn-danger"
                          onClick={() => dispatch(removeFromCart(cartproduct.id))}
                        ><i class="fa fa-trash" aria-hidden="true"></i> </button></td>
      </tr>
      </>
    )
}

export default Table
