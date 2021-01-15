import React, { createContext, useReducer } from 'react';
import { modalReducer } from '../reducers/modalReducer';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {

    const [status, dispatch] = useReducer(modalReducer, false);

    return (
        <ModalContext.Provider value={{status, dispatch}}>
            { props.children }
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;
