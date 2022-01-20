import React from 'react';
import './ItemCard.css';

const ItemCard = ({props}) => {

  const {id, name, description, img } = props;
  console.log(img)

  return (
    <>
        <div className="itemCard">
            <div className="itemCard__img">
                <img src={img} alt="" />
            </div>

            <div className="itemCard__description">
                <h3>{name}</h3>
                <p>{description}</p>
                <span>Button</span>
                <span>{id}</span>
            </div>
        </div>
    </>
  );
    
};

export default ItemCard;
