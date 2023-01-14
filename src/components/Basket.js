import React from "react";
import "./Basket.css";
const Basket = ({ showBasket, basketItems }) => {
  const basketItemsToDisplay = basketItems.map((basketItem, index) => {
    return (
      <div className="basket-item" key={index}>
        <p>{basketItem[0]}</p>
        <p>{basketItem[1]}</p>
      </div>
    );
  });

  const basketTotal = basketItems
    .map((basketItem) => {
      return parseFloat(basketItem[1].slice(1));
    })
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
  console.log(
    "🚀 ~ file: Basket.js:17 ~ basketTotal ~ basketTotal",
    basketTotal
  );

  return (
    <>
      {showBasket ? (
        <section className="basket">
          {basketItemsToDisplay}
          <p>Total: {basketTotal}</p>
        </section>
      ) : null}
    </>
  );
};

export default Basket;
