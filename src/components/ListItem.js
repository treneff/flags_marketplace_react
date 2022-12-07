import React from 'react';
import './ListItem.css'

const ListItem = ({ country, onFlagClicked }) => {
    const handleClick = function () {
        console.log(`Clicked on ${country.name.common}`);
        onFlagClicked(country);
    };

    return (
        <div onClick={handleClick} className='clickable-li'>
            <img src={country.flags.svg} alt="asds" />
        </div>
    );
};

export default ListItem;
