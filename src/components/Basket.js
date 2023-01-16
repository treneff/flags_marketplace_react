import React, { useEffect, useState } from "react";
import "./Basket.css";

const Basket = ({ showBasket, basketItems, removeFromBasket }) => {
  const getBasketTotal = basketItems
    .map((basketItem) => {
      return parseFloat(basketItem[1].slice(1));
    })
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);

  const [basketTotal, setBasketTotal] = useState(getBasketTotal);

  useEffect(() => {
    setBasketTotal(getBasketTotal);
  }, [basketItems, getBasketTotal]);

  const basketItemsToDisplay = basketItems.map((basketItem, index) => {
    return (
      <div className="basket-item" key={index}>
        <p>{basketItem[0]}</p>
        <p>{basketItem[2]}</p>
        <p>{basketItem[1]}</p>
        <button onClick={removeFromBasket} value={index}>
          Remove
        </button>
      </div>
    );
  });

  const discountTotal = (event) => {
    console.log("🚀 ~ file: Basket.js:26 ~ discountTotal ~ event", event);
    console.log(
      "🚀 ~ file: Basket.js:26 ~ discountTotal ~ basketTotal",
      basketTotal
    );
    event.preventDefault();
    if (event.target[0].value === "10") {
      const discount10Total = basketTotal * 0.9;
      console.log(
        "🚀 ~ file: Basket.js:28 ~ discountTotal ~ discount10Total",
        discount10Total
      );
      setBasketTotal(discount10Total);
    } else if (event.target[0].value === "15") {
      const discount15Total = basketTotal * 0.85;
      console.log(
        "🚀 ~ file: Basket.js:31 ~ discountTotal ~ discount15Total",
        discount15Total
      );
      setBasketTotal(discount15Total);
    } else {
      alert("Sorry, that's not a valid code.");
    }
  };

  return (
    <>
      {showBasket ? (
        <section className="basket">
          {basketItemsToDisplay}
          <p>Total: £{basketTotal.toFixed(2)}</p>
          <form onSubmit={discountTotal}>
            <input type="text" name="discount" id="discount" />
            <button type="submit">Apply Discount</button>
          </form>
        </section>
      ) : null}
    </>
  );
};

export default Basket;
