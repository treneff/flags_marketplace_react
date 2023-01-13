import React from 'react';
import './Basket.css';
const Basket = ({ showBasket, basketItems }) => {
    
    const basketItemsToDisplay = basketItems.map((basketItem, index) => {
            return <div className="basket-item" key={index}>{basketItem.name.common}</div>;
    });

    return (
        <section className={'basket' + (!showBasket ? '-hidden' : '')}>
            {basketItemsToDisplay}
        </section>
    );
};

export default Basket;
