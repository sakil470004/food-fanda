import React from 'react';
import Card from './Card';
import './CardList.css'

const CardList = ({ foods }) => {
  return (
    <div className='tc cardlist-container'>
      {/* {console.log(foods)} */}
      {
        foods.map(food => {

          return (

            <Card className=''
              key={food._id}
              id={food._id}
              name={food.name}
              image={food.img}
              description={food.description}
              price={`${food.price} $`}

            />


          );

        })
      }

      {/* {
        foods.map((user, i) => {
          return (
            <Card 
              key={i}
              id={i}
              name={`sp + ${i}`}
              image={'https://i.ibb.co/CbwPSRn/breakfast6.png'}
             
              />
            
          );
        })
      } */}
    </div>
  );
}

export default CardList;