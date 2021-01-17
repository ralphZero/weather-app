import React, { useContext } from 'react';
import TempData from './TempData';
import { WeatherContext } from '../../contexts/WeatherContext';
import { UnitContext } from '../../contexts/UnitContext';
import { getWeatherImage, UnitConverter, DateFormater } from '../../Utilities';

const TempDataList = () => {

    const { weatherState } = useContext(WeatherContext);
    const { unit } = useContext(UnitContext);

    let weatherList = [...weatherState];

    weatherList.splice(0, 1);
    
    const tempDataList = weatherList.map((weather, index) => {

            let cToF = unit ===  'c' ? '℃' : '℉';
            let min = unit !== 'c' ? UnitConverter(weather.min_temp) : parseInt(weather.min_temp);
            let max = unit !== 'c' ? UnitConverter(weather.max_temp) : parseInt(weather.max_temp);
            let img = getWeatherImage(weather.weather_state_abbr);
            let date = index === 0 ? 'Tomorrow' : DateFormater(weather.applicable_date);

            return (
                <TempData key={weather.id} min={min+cToF} max={max+cToF} img={img} date={date}/>
            )
        
    });

    return (
        <div className='temp-datalist'>
            { tempDataList }
        </div>
    );
}

export default TempDataList;
