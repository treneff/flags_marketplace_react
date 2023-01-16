import SingleFlagInfo from "./SingleFlagInfo";
import "./ListItem.css";

const ListItem = ({ country, addToBasket, itemOpen, handleItemClick }) => {
  return (
    <>
      <div onClick={handleItemClick}>
        <img src={country.flags.svg} alt="asds" />
      </div>
      {itemOpen ? (
        <SingleFlagInfo country={country} addToBasket={addToBasket} />
      ) : null}
    </>
  );
};

export default ListItem;
