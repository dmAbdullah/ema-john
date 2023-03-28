import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

const [products, setProducts] = useState( [] );
const [cart, setCart] = useState( [] )

useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
}, [] );

useEffect(()=>{ 
        const storedCart= getShoppingCart();
        const savedCart= [];

        // step 01
        
        for(const id in storedCart){
        // console.log(id);

        // step 02 get the product by using id

        const addedProduct= products.find(product=> product.id===id);

        if (addedProduct) {
            // step 03 add quantity
            const quantity= storedCart[id];
            addedProduct.quantity= quantity;
            console.log(addedProduct);
            // step 04 add the addedProduct to the saved cart 
            savedCart.push(addedProduct);
        }     
        console.log(addedProduct);
        }
        // step 05 set the cart 
        setCart(savedCart);
},[products])

const handleAddToCart = (product)=> {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id)
  }

    return (
        <div className='shop-container'>

            <div className='products-container'>
            {
            products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>)
            
            }
            </div>

            <div className="cart-container">

            <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;