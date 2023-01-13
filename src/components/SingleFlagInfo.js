import React from 'react';

const SingleFlagInfo = ({ country, addToBasket }) => {
    return (
        <>
            <div>{country.name.common}</div>
            <img src={country.flags.svg} alt={country.name.common} />
            Order by longest length:
            <ul>
                <li>
                    <p>40cm</p>
                    <button onClick={addToBasket} value={country.name.common}>
                        £4.99
                    </button>
                </li>
                <li>
                    <p>50cm</p>
                    <button onClick={addToBasket} value={country.name.common}>
                        £5.99
                    </button>
                </li>
                <li>
                    <p>60cm</p>
                    <button onClick={addToBasket} value={country.name.common}>
                        £6.99
                    </button>
                </li>
            </ul>
        </>
    );
};

export default SingleFlagInfo;
