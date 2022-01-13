import './FoodDetails.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToDb, addToDb2 } from '../fakedb/fakedb';


export default function FoodDetails() {


    const [currentFood, setCurrentFood] = useState({})


    const [itemCount, setItemCount] = useState(1)
    const { foodId } = useParams();



    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {

                const found = data.find(element => element._id == foodId);
                setCurrentFood(found)

            })

    }, []);

    const handleItemPlus = () => {
        setItemCount(itemCount + 1)

    }


    const handleItemMinus = () => {
        setItemCount(itemCount - 1)

    }
    const handleAddCartButton = () => {
        addToDb2(currentFood._id, itemCount);
        // console.log('item added')
        console.log(currentFood)
        alert('Item Added')
    }

    return (
        <div className='full-detail-pic-container-food-details'>
            <div className='left-container-foodDetails'>
                <h1>{currentFood.name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem, repudiandae explicabo, placeat amet dicta laboriosam dolores inventore sequi eligendi ratione, magnam vero ipsum totam incidunt nemo excepturi ad earum.</p>
                <div className='countFood-div-wrapper-food-details'>

                    <h1 >${(currentFood.price * itemCount).toFixed(2)} </h1>

                    <div className='countFood-div-food-details'>
                        <button name='-' onClick={handleItemMinus} >-</button>
                        <button>{itemCount}</button>
                        <button name='+' onClick={handleItemPlus}>+</button>
                    </div>
                </div>
                <button onClick={handleAddCartButton} className='btn-add-food-details'><ShoppingCartIcon />Add</button>
            </div>
            <div className='right-container-foodDetails'>
                <img src={currentFood.img} alt='food' />

            </div>
        </div>
    )
}
