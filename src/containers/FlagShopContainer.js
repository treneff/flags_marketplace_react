import { useEffect, useState } from "react";
import FlagsList from "../components/FlagsList";

const FlagShopContainer = ({ addToBasket, itemOpen, handleItemClick }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = function () {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((countries) => setCountries(countries));
  };

  return (
    <div>
      <FlagsList
        itemOpen={itemOpen}
        handleItemClick={handleItemClick}
        countries={countries}
        addToBasket={addToBasket}
      />
    </div>
  );
};

export default FlagShopContainer;
