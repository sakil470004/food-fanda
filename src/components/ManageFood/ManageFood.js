import React, { useEffect, useState } from 'react'
import './ManageFood.css'

export default function ManageFood() {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://foodspanda.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])

    const handleDelete = (id) => {
    
      
        const url = `https://foodspanda.herokuapp.com/foods/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)

                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = foods.filter(food => food._id !== id);
                    setFoods(remaining)
                }
            })
    }
    return (
        <div>
            <h2>Manage Foods</h2>
            {
                foods.map(food => <div className='manage-Foods-main-div' key={food._id}>
                    <h3>{food.name}</h3>
                    {/* filter who has star the dev who inserted with star but user did not has this option */}
                    {!food?.star && <button onClick={() => handleDelete(food._id)}>Delete</button>}
                </div>)
            }
        </div>
    )
}
