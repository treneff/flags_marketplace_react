import { useEffect, useState } from 'react';
import FlagsList from '../components/FlagsList';

const FlagShopContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = function () {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((countries) => setCountries(countries));
    };
    
    const onFlagClicked = function (country) {
        setSelectedCountry(country);
    };

    return (
        <div>
            <FlagsList countries={countries} onFlagClicked={onFlagClicked} />
        </div>
    );
};

export default FlagShopContainer;
