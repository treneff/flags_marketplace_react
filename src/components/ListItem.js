import SingleFlagInfo from "./SingleFlagInfo";
import { useState } from "react";
import "./ListItem.css";

const ListItem = ({ country, addToBasket }) => {
  const [itemOpen, setItemOpen] = useState(false);

  const handleItemClick = () => {
    const itemStatus = !itemOpen;
    setItemOpen(itemStatus);
  };

  return (
    <div onClick={handleItemClick}>
      <img src={country.flags.svg} alt="asds" />
      {itemOpen ? (
        <SingleFlagInfo country={country} addToBasket={addToBasket} />
      ) : null}
    </div>
  );
};

export default ListItem;
