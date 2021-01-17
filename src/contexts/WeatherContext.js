import React, { createContext, useReducer, useEffect } from 'react';
import { weatherReducer, locationReducer } from '../reducers/weatherReducer';
import axios from 'axios';

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {

    const [locationState, locationDispatch] = useReducer(locationReducer, {}, () => {
        const location = localStorage.getItem('my_location');
        return location ? JSON.parse(location) : {title: 'London', woeid: 44418};
    });

    const [weatherState, weatherDispatch] = useReducer(weatherReducer, []);

    useEffect(() => {
        weatherDispatch({type: 'SET_WEATHER', data: []});
        axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/'+locationState.woeid+'/',{
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then((response) => {
            let weatherdata = response.data.consolidated_weather;
            weatherDispatch({type: 'SET_WEATHER', data: weatherdata});
        });
        localStorage.setItem('my_location', JSON.stringify(locationState));
    }, [locationState]);

    return (
        <WeatherContext.Provider value={{locationState, locationDispatch, weatherState, weatherDispatch}}>
            { props.children }
        </WeatherContext.Provider>
    );
}

export default WeatherContextProvider;