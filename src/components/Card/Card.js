import React from 'react';
import { useHistory } from "react-router-dom";
import './Card.css';


const Card = ({ name, image, id, description, price }) => {
  const url = `/food/${id}`;
  let history = useHistory()
  const handleButton = () => {
    history.push(url);
  }
  

  return (
    

    <div  className = 'card-container tc  br4 dib bw2 '
      onClick = { handleButton }
      >
      <img className='imageWidth br4' alt='drinks' src={image} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{price}</h3>

      </div>
    </div >


  );
}

export default Card;
