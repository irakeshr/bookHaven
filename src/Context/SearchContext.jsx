import React, { useState } from 'react';
import { createContext } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
    const [searchKey, setSearchKey] = useState(''); 
    return (
        <SearchContext.Provider value={{ searchKey, setSearchKey }}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
