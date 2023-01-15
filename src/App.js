import './App.css';
import FlagShopContainer from './containers/FlagShopContainer';
import Header from './components/Header';
import Basket from './components/Basket';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
    const [showBasket, setShowBasket] = useState(false);
    const [basketItems, setBasketItems] = useState([]);
    const [modal, setModal] = useState(false);
    const [itemOpen, setItemOpen] = useState(false);

    const handleItemClick = () => {
        setItemOpen(!itemOpen);
    };

    const handleBasketClick = () => {
        setShowBasket(!showBasket);
        showModal()
    };

    const showModal = () => {
        setModal(!modal);
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
        <div className='App'>
            {modal ? <Modal showModal={showModal} /> : null}
            <Header handleBasketClick={handleBasketClick} />
            <Basket
                showBasket={showBasket}
                basketItems={basketItems}
                removeFromBasket={removeFromBasket}
            />

            <FlagShopContainer
                itemOpen={itemOpen}
                handleItemClick={handleItemClick}
                addToBasket={addToBasket}
            />
        </div>
    );
}

export default App;
