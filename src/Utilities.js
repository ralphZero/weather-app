import clear from './media/Clear.png';
import hail from './media/Hail.png';
import heavycloud from './media/HeavyCloud.png';
import heavyrain from './media/HeavyRain.png';
import lightcloud from './media/LightCloud.png';
import lightrain from './media/LightRain.png';
import shower from './media/Shower.png';
import sleet from './media/Sleet.png';
import snow from './media/Snow.png';
import thunderstorm from './media/Thunderstorm.png';

export const UnitConverter = (value, cToF = true) => {
    let res =  cToF ?  (9/5 * value + 32 ) : (5/9 * value - 32);
    return parseInt(res);
}

export const DateFormater = (dateString) => {
    let date = new Date(dateString);
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let string = days[date.getDay()]+', '+date.getUTCDate()+' '+months[date.getMonth()];
    return string;
}

export const getWeatherImage = (value) => {
    switch (value) {
        case 'sn':
            return snow;
        case 'sl':
            return sleet;
        case 'h':
            return hail;
        case 't':
            return thunderstorm;
        case 'hr':
            return heavyrain;
        case 'lr':
            return lightrain;
        case 's':
            return shower;
        case 'hc':
            return heavycloud;
        case 'lc':
            return lightcloud;
        case 'c':
            return clear;
        default:
            return clear;
    }
}