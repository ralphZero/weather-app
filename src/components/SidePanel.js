import React, { useContext } from 'react';
import bgImg from '../media/Cloud-background.png';
import axios from 'axios';
import { ModalContext } from '../contexts/ModalContext';
import { WeatherContext } from '../contexts/WeatherContext';
import { UnitContext } from '../contexts/UnitContext';
import { UnitConverter, DateFormater, getWeatherImage } from '../Utilities';

const SidePanel = () => {
    const panelStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: '50% 20%',
        backgroundSize: '100% auto',
        backgroundBlendMode: 'overlay'
    }

    const columnStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        color: 'var(--side-main-text)'
    }

    const rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        color: 'var(--side-micro-text)'
    }

    const { weatherState, locationState, locationDispatch } = useContext(WeatherContext);
    const { unit } = useContext(UnitContext);
    
    let cToF = unit ===  'c' ? '℃' : '℉';
    let temp = unit !== 'c' ? UnitConverter(weatherState[0].the_temp) : parseInt(weatherState[0].the_temp);
    let weatherStateName = weatherState[0].weather_state_name; 
    let currDate = DateFormater(weatherState[0].applicable_date);
    let image = getWeatherImage(weatherState[0].weather_state_abbr);

    const { dispatch } = useContext(ModalContext);

    const handleGeolocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;

                axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong='+lat+','+long+'', {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then((res) => {
                    if(res.data.length !== 0){
                        let city = res.data[0];
                        locationDispatch({
                            type: 'CHANGE_LOCATION',
                            location: {
                                title: city.title,
                                woeid: city.woeid
                            }
                        });
                    }else{
                        alert('An error occured while retrieving your location.');
                    }
                });

            }, () => {
                alert('Unable to retrieve your location.');
            })
        }else{
            alert('Geolocation is not supported by this browser.');
        }
    }

    return (
        <div className='side-panel' style={panelStyle}>
            <div className='side-panel__buttonGroup'>
                <button onClick={(e) => dispatch({type: 'SHOW_MODAL'})} className='side-panel__button'>Seach for places</button>
                <button onClick={(e) => handleGeolocation()} className='side-panel__button side-panel__button--round'>
                    <span className='material-icons'>my_location</span>
                </button>
            </div>
            <div style={columnStyle}>
                <img className='side-weather-img' src={image} alt="img"/>
                <h1 className='side-weather-temp'>{temp}<span className='side-weather-temp__measure'>{cToF}</span></h1>
            </div>
            <br/>
            <div style={columnStyle}>
                <h3 style={{color : `var(--side-micro-text)`}}>{weatherStateName}</h3>
                <span style={rowStyle}>
                    <span>Today</span>
                    <span>•</span>
                    <span>{currDate}</span>
                </span>
                <div>
                    <div style={{color : `var(--side-micro-text)`}} className='side-panel__button side-panel__button--row side-panel__button--transparent'>
                        <span className='material-icons'>place</span>
                        <span>{locationState.title}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidePanel;