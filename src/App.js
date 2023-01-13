import './App.css';
import FlagShopContainer from './containers/FlagShopContainer';
import Header from './components/Header';
import Basket from './components/Basket';
import { useState } from 'react';

function App() {
    const [showBasket, setShowBasket] = useState(false);
    const [basketItems,setBasketItems] = useState([])

    const handleBasketClick = () => {
      showBasket?setShowBasket(false): setShowBasket(true)
    }

    const addToBasket = (country)=> {
      console.log(country)
      let newBasketItems = basketItems;
      setBasketItems([ country,...newBasketItems])      
  };
    return (
        <div className='App'>
            <Header handleBasketClick = {handleBasketClick} />
            <Basket showBasket = {showBasket} basketItems = {basketItems} />
            <FlagShopContainer addToBasket = {addToBasket} />
        </div>
    );
}

export default App;
