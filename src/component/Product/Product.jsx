import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    
  const { img, name, seller, price, ratings } = props.product;

  const handleAddToCart= props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" srcset="" />
        <div className="product-info">
                <h5 className="product-name">{name}</h5>
                <p>Price: $ {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
        </div>
      <button onClick={()=> handleAddToCart(props.product)} className="btn-cart">
        Add to Cart <FontAwesomeIcon icon={faCartPlus} />
      </button>
      
    </div>
  );
};

export default Product;
