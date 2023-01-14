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
    const flagSize = event.target.previousSibling.innerHTML;
    const flagValue = event.target.value;
    const country = event.target.innerHTML;
    setBasketItems((currentBasketItems) => [
      ...currentBasketItems,
      [flagValue, country, flagSize],
    ]);
  };

  const removeFromBasket = (event) => {
    const newBasket = [...basketItems];
    newBasket.splice(event.target.value, 1);
    setBasketItems(newBasket);
  };

  return (
    <div className="App">
      <Header handleBasketClick={handleBasketClick} />
      <Basket
        showBasket={showBasket}
        basketItems={basketItems}
        removeFromBasket={removeFromBasket}
      />
      <FlagShopContainer addToBasket={addToBasket} />
    </div>
  );
}

export default App;
