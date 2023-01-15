import ListItem from './ListItem';

import './FlagsList.css';
import { useState, useEffect } from 'react';

const FlagsList = ({ countries, addToBasket }) => {
    const [maxItemsToDisplay, setMaxItemsToDisplay] = useState(20);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');
    console.log(filteredCountries);
    console.log(countries);

    const countriesToDisplay = searchCountry ? filteredCountries : countries;

    const countryItems = countriesToDisplay.map((country, index) => {
        if (index < maxItemsToDisplay) {
            return <ListItem country={country} key={index} addToBasket={addToBasket} />;
        }
        return null;
    });

    const handleChange = (event) => {
        setSearchCountry(event.target.value);
        let filteredSearch = countries.filter((country) => {
            return country.name.common.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setFilteredCountries(filteredSearch);
        setMaxItemsToDisplay(20);
    };

    const showMoreItems = () => {
        setMaxItemsToDisplay(maxItemsToDisplay + 20);
    };
    return (
        <>
            <form>
                <input
                    type='text'
                    placeholder='Search...'
                    value={searchCountry}
                    onChange={handleChange}
                />
            </form>
            <ul className='shop-container'>{countryItems}</ul>
            <button onClick={showMoreItems}>Show More</button>
        </>
    );
};

export default FlagsList;
