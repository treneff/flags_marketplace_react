import "./App.css";
import FlagShopContainer from "./containers/FlagShopContainer";
import Header from "./components/Header";
import Basket from "./components/Basket";
import { useState } from "react";

function App() {
  const [showBasket, setShowBasket] = useState(false);
  const [basketItems, setBasketItems] = useState([]);

  const handleBasketClick = () => {
    showBasket ? setShowBasket(false) : setShowBasket(true);
  };

  const addToBasket = (event) => {
    console.log("🚀 ~ file: App.js:16 ~ addToBasket ~ event.target.value", event.target.value);
    console.log("🚀 ~ file: App.js:16 ~ addToBasket ~ event.target.innerHTML", event.target.innerHTML);
    const flagValue = event.target.value;
    const country =  event.target.innerHTML;
    // let newBasketItems = basketItems;
    // setBasketItems([country, ...newBasketItems]);
    // const currentBasketItems = basketItems
    // setFilteredProducts((currentFilteredProducts) => ([...currentFilteredProducts, ...productsToAdd]));
    setBasketItems((currentBasketItems) => ([...currentBasketItems, [flagValue, country]]))
  };

  return (
    <div className="App">
      <Header handleBasketClick={handleBasketClick} />
      <Basket showBasket={showBasket} basketItems={basketItems} />
      <FlagShopContainer addToBasket={addToBasket} />
    </div>
  );
}

export default App;
