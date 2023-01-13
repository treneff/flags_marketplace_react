import SingleFlagInfo from './SingleFlagInfo';
import { useState } from 'react';
import './ListItem.css';

const ListItem = ({ country, addToBasket }) => {
    const [itemOpen, setItemOpen] = useState(false);

    const handleItemClick = () => {
        itemOpen ? setItemOpen(false) : setItemOpen(true);
    };

    return (
        <div onClick={handleItemClick}>
            <img src={country.flags.svg} alt='asds' />
            {itemOpen ? <SingleFlagInfo country={country} /> : null}
        </div>
    );
};

export default ListItem;
