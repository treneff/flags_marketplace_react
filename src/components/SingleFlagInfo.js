import React from 'react';

const SingleFlagInfo = (country) => {
    console.log(country);
    return <div>{country.country.name.common}</div>;
};

export default SingleFlagInfo;
