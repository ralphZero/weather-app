import React from 'react';
import sheet from './TempData.module.css';

const TempData = ({date, img, min, max}) => {
    return (
        <div className={sheet.container}>
            <div>{date}</div>
            <img className={sheet.img} src={img} alt="img"/>
            <div className={sheet.tempRow}>
                <span>{max}</span>
                <span>{min}</span>
            </div>
        </div>
    );
}

export default TempData;
