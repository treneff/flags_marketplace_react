import ListItem from "./ListItem";
import "./FlagsList.css";
import { useState } from "react";

const FlagsList = ({
  countries,
  addToBasket,
  itemOpen,
  handleItemClick,
  setItemOpen,
}) => {
  const [maxItemsToDisplay, setMaxItemsToDisplay] = useState(20);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  const countriesToDisplay = searchCountry ? filteredCountries : countries; //define array of countries to be used to display

  //Iteration through the countries to display
  const countriesNodes = countriesToDisplay.map((country, index) => {
    if (index < maxItemsToDisplay) {
      // do not display if the items are more than the maximum defined to display
      return (
        <ListItem
          handleItemClick={handleItemClick}
          country={country}
          key={index}
          addToBasket={addToBasket}
        />
      );
    }
    return null;
  });

  //handler search form and filter through the results
  const handleChange = (event) => {
    setSearchCountry(event.target.value);
    let filteredSearch = countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFilteredCountries(filteredSearch);
    setMaxItemsToDisplay(20);
  };

  //show more items handler
  const showMoreItems = () => {
    setMaxItemsToDisplay(maxItemsToDisplay + 20);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={searchCountry}
          onChange={handleChange}
        />
      </form>
      <ul className="shop-container">{countriesNodes}</ul>
      <button onClick={showMoreItems}>Show More</button>
    </>
  );
};

export default FlagsList;
