import React, { useEffect, useState } from 'react'
import CardList from '../Card/CardList'
import MiddleNav from '../MiddleNav/MiddleNav'

import './Home.css'


export default function Home({ foods, setFoods }) {

    const [searchField, setSearchField] = useState('')
    const [currentDish, setCurrentDish] = useState('breakfast')


    useEffect(() => {
        fetch('https://foodspanda.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => {
                if (searchField === '') {
                    data = data.filter(n => n.category === currentDish);
                }
                setFoods(data)
                // console.log(data)
            })

    }, [currentDish,searchField]);


    const handleSearch = (e) => {
        // console.log(e.target.value)
        setSearchField(e.target.value)
    }

    const fillteredFood = foods.filter(fd => {
        return fd.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
        <div>
            
            <div className='background-cointainer-home' >         <h1>Best food waiting for your belly</h1>
                <div>
                    <input onChange={handleSearch} className='home-search-input' placeholder='Search food items'></input>
                    <button className='home-search-btn' >Search</button>
                </div>

            </div>
            <MiddleNav currentDish={currentDish} setCurrentDish={setCurrentDish} searchField={searchField} />
            <CardList foods={fillteredFood} />
           
            
            
        </div>
    )
}
