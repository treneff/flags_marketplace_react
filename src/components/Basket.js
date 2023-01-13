import React from "react";
import "./Basket.css";
const Basket = ({ showBasket, basketItems }) => {
  // console.log("🚀 ~ file: Basket.js:4 ~ Basket ~ showBasket", showBasket)

  const basketItemsToDisplay = basketItems.map((basketItem, index) => {
    // TODO change this to reflect contents properly
    // return <div className="basket-item" key={index}>{basketItem.name.common}</div>;
    return (
      <div className="basket-item" key={index}>
        {basketItem}
      </div>
    );
  });

  return (
    <>
      {showBasket ? (
        <section className="basket">{basketItemsToDisplay}</section>
      ) : null}
    </>
  );

  //   return (
  //     <>
  //       <section className={"basket" + (!showBasket ? "-hidden" : "")}>
  //         {basketItemsToDisplay}
  //       </section>
  //     </>
  //   );
};

export default Basket;
