import React, { createContext, useState } from 'react';

export const UnitContext = createContext();

const UnitContextProvider = (props) => {

    const [unit, setUnit] = useState('c');

    return (
        <UnitContext.Provider value={{unit, setUnit}}>
            { props.children }
        </UnitContext.Provider>
    );
}

export default UnitContextProvider;
