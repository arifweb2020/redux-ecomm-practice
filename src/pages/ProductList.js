import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from './../actions';
import { useDispatch } from 'react-redux';

const ProductList = ({prditem}) => {
  const dispatch = useDispatch();
    return (
        <div className="col-md-4 mt-5">

<div className="card" style={{width:"100%"}}>
<div className="d-flex ">
  <div className="p-2 mr-auto "><span><b>Gender:</b> {prditem.gender}</span></div>
  <div className="p-2 "><span><b>Color:</b> {prditem.primaryColour}</span></div>
  
</div>
     
   <img className="card-img-top prd-img" src={prditem.images[0].src} alt="Card image" /> 
  <div className="card-body">
    <h4 className="card-title">{prditem.brand}</h4>
    
    <p className="card-text">Cost : {prditem.price}</p>
    <Link to="/cart" onClick={() => dispatch(addToCart(prditem.id))} className="btn btn-primary">Add To Cart</Link>
  </div>
</div>
            
        </div>
    )
}

export default ProductList
