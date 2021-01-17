import React, { useContext } from 'react';
import MainPanel from "./MainPanel";
import ModalPanel from "./ModalPanel";
import SidePanel from "./SidePanel";
import ModalContextProvider from '../contexts/ModalContext';
import Loader from './Loader';
import { WeatherContext } from '../contexts/WeatherContext';

const Container = () => {

    const { weatherState } = useContext(WeatherContext);

    const show = weatherState.length !==0 ? (
        <>
            <ModalContextProvider>
                <ModalPanel />
                <SidePanel />
            </ModalContextProvider>
            <MainPanel />
        </>
    ) : (
        <Loader />
    )

    return (
        <>
            { show }
        </>
    );
}

export default Container;
