import React, { useState } from 'react';

function SearchForm() {
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <form>
            <input type='text' placeholder='Search...' value={searchTerm} onChange={handleChange} />
        </form>
    );
}

export default SearchForm;
