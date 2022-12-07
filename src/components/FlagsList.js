import React from 'react'
import ListItem from './ListItem';
import "./FlagsList.css"

const FlagsList = ({ countries, onFlagClicked}) => {
    const countryItems = countries.map((country, index) => {
        return <ListItem country={country} key={index} onFlagClicked={onFlagClicked} />;
    });

    return (
        <div className ="shop-container">
            {countryItems}
        </div>
    );
};

export default FlagsList