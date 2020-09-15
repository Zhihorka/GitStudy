import React from 'react';
import style from './style.module.css'


const OfferCard = (props) => {
  const offers = props.offers;
  return (
    <div>
       { offers.map(offers =>
      <div className={style.wrapper} key={offers.name}>
        <div src = {offers.img} className={style.img}/>
        <div className = {style.description}>
          <h4 className={style.restoranName}>{offers.name}</h4>
          <div className = {style.info}>
              <div className = {style.delivery}>{offers.deliveryPrice}</div>
              <div className = {style.time}>{offers.time}</div>
              <div className = {style.price}>{offers.price}</div>
          </div>
          <div className = {style.rating}>{offers.rating}</div>
        </div>
      </div>
       )}
    </div>
  );
}



export default OfferCard;