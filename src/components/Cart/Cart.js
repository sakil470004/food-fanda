import './Cart.css'
import React, { useEffect, useState } from 'react'
import { addToDb, removeFromDb, clearTheCart, getStoredCart } from '../fakedb/fakedb';
import Card from '../Card/Card'
import { useHistory } from 'react-router';

export default function Cart() {
    const [cartFood, setCartFood] = useState([])
    const history = useHistory();

    const fetchDataFromLocalStorage = (data) => {
        // setFoods(data)
        // console.log(data)
        const savedCart = getStoredCart();

        // console.log(data)
        // console.log(savedCart)
        if (savedCart) {
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = data.find(product => product._id === key);
                // console.log("iam here")
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            // setCart(storedCart);
            // console.log(storedCart)
            setCartFood(storedCart)
        }
    }

    useEffect(() => {
        fetch('https://foodspanda.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => {
                fetchDataFromLocalStorage(data)



            })

    }, []);
    const handleRemove = (key) => {
        removeFromDb(key);
        //    history.push('/cart')
        fetchDataFromLocalStorage(cartFood)

    }
    return (
        <div className='card-main' >
            {
                cartFood.map(food => {

                    return (
                        <div>
                            <div className='cart-div-main-wrapper'>
                                <Card className=''
                                    key={food._id}
                                    id={food._id}
                                    name={food.name}
                                    image={food.img}
                                    description={food.description}
                                    price={`${food.price} $`}

                                />
                                <div>
                                    <h4> Quantity : {food.quantity}</h4>
                                    <h2>Total : {(food.quantity * food.price).toFixed(2)}</h2>
                                    <button onClick={() => handleRemove(food._id)}>remove</button>
                                </div>
                            </div>

                            {/* {!cartFood[0]?.key &&

                                <h1 style={{ textAlign: 'center' }}>
                                    Empty Cart
                                </h1>} */}
                        </div>

                    );

                })
            }
        </div>
    )
}
