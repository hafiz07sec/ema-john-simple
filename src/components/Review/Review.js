import React from 'react';
import { useEffect, useState } from 'react';
import { deleteShoppingCart, getStoredCart, removeFromDb } from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'



const Review = () => {
    const [cart, setCart] = useState([]);
    const[orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
       // console.log("Order Placed.");
       setCart([]);
       setOrderPlaced(true);
       deleteShoppingCart();
    }

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

    let thankyou;
    if (orderPlaced) {
        thankyou = <img src = {happyImage} alt =""  />
    } 

    return (
        <div className="twin-container">
            <div className="product-container">

                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        removeProduct={removeProduct}
                        product={pd}> </ReviewItem>)
                }

                {thankyou}

            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <button onClick={handlePlaceOrder} className='main-button'>Place Order</button>
                </Cart>
            </div>

        </div>
    );
};

export default Review;