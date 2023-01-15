import ListItem from './ListItem';
import './FlagsList.css';
import { useState, useEffect } from 'react';

const FlagsList = ({ countries, addToBasket }) => {
    const [itemsToDisplay, setItemsToDisplay] = useState(20);
    const [countriesToDisplay, setCountriesToDisplay] = useState([]);
    console.log(countriesToDisplay);
    console.log(countries);
    useEffect(() => {
        setCountriesToDisplay(countries);
    }, [countries]);

    const countryItems = countriesToDisplay.map((country, index) => {
        if (index < itemsToDisplay) {
            return <ListItem country={country} key={index} addToBasket={addToBasket} />;
        }
        return null;
    });

    // const showMoreItems = () => {
    //     setItemsToDisplay(itemsToDisplay + 20);
    // };
    return (
        <>
            <ul className='shop-container'>{countryItems}</ul>
        </>
    );
};

export default FlagsList;
