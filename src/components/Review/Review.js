import React from 'react';
import { useEffect, useState } from 'react';
import { getStoredCart, removeFromDb } from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';



const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) => {
        // console.log('Remove Click', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDb(productKey);
    }


    useEffect(() => {
        //Cart

        const savedCart = getStoredCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        
       // console.log(savedCart);

        setCart(cartProducts);

    }, [])
    return (
        <div className="twin-container">
            <div className="product-container">

                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        removeProduct={removeProduct}
                        product={pd}> </ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Review;