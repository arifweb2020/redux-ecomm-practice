import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from './../actions';
import { useDispatch } from 'react-redux';

const ProductList = ({prditem}) => {
  const dispatch = useDispatch();
    return (
        <div className="col-md-4 mt-5">

<div className="card" style={{width:"100%"}}>

     
  <img className="card-img-top prd-img" src={prditem.image} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">{prditem.name}</h4>
    
    <p className="card-text">Cost : <i class="fa fa-usd" aria-hidden="true"></i> {prditem.price}</p>
    <Link to="/cart" onClick={() => dispatch(addToCart(prditem.id))} className="btn btn-primary">Add To Cart</Link>
  </div>
</div>
            
        </div>
    )
}

export default ProductList
