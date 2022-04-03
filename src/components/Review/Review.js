import React from 'react';
import { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import  fakeData  from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';



const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        //Cart
        
        const savedCart = getStoredCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });

            setCart(cartProducts);
        
    }, [])
    return (
        <div>
            <h2>Cart Items Review: {cart.length}</h2>
            { 
                cart.map(pd => <ReviewItem
                    key = {pd.key}
                    product={pd}> </ReviewItem>)
            }
        </div>
    );
};

export default Review;