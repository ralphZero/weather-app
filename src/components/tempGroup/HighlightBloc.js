import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

const HighlightBloc = (props) => {

    const { weatherState } = useContext(WeatherContext);
    let weather = weatherState[0];

    return (
        <div className='highlight-container'>
            <h1 className='highlight-h1'>Today’s Hightlights</h1>
            <div className='highlight-grid'>

                <div className='highlight-item'>
                    <span className='highlight-item__title'>Wind status</span>
                    <div className='highlight-item__data'>
                        <span>{ parseFloat(weather.wind_speed).toFixed(1) }</span>
                        <span className='highlight-item__data__tail'>mph</span>
                    </div>
                    <div className='highlight-item__last'>
                        <span className='material-icons'>navigation</span>
                        <span>{ weather.wind_direction_compass }</span>
                    </div>
                </div>

                <div className='highlight-item'>
                    <span className='highlight-item__title'>Humidity</span>
                    <div className='highlight-item__data'>
                        <span>{ weather.humidity }</span>
                        <span className='highlight-item__data__tail'>%</span>
                    </div>
                    <div className='highlight-item__last'>
                        <div className='highlight-item__last__gauge'>
                            <div style={{width: `${weather.humidity}%`}} className='highlight-item__last__gauge__filler'></div>
                        </div>
                    </div>
                </div>

                <div className='highlight-item'>
                    <span className='highlight-item__title'>Visibility</span>
                    <div className='highlight-item__data'>
                        <span>{ parseFloat(weather.visibility).toFixed(1) }</span>
                        <span className='highlight-item__data__tail'>miles</span>
                    </div>
                </div>

                <div className='highlight-item'>
                    <span className='highlight-item__title'>Air Pressure</span>
                    <div className='highlight-item__data'>
                        <span>{ weather.air_pressure }</span>
                        <span className='highlight-item__data__tail'>mb</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HighlightBloc;
