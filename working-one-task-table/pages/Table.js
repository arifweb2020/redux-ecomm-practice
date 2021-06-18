import React from 'react'
import { removeFromCart } from './../actions';
import {  useDispatch } from 'react-redux';
const Table = ({cartproduct}) => {
    const dispatch = useDispatch();
    return (
        <tr>
        <td><img
                      
                      src={cartproduct.image}
                      alt="product"
                      style={{width:"50px", height:"50px"}}
                    /></td>
        <td>{cartproduct.name}</td>
        <td>{cartproduct.price}</td>
        <td><button type="button" className="btn btn-sm btn-danger"
                          onClick={() => dispatch(removeFromCart(cartproduct.id))}
                        >Delete </button></td>
      </tr>
    )
}

export default Table
