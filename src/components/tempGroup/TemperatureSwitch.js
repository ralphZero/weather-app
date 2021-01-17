import React, { useContext } from 'react';
import { UnitContext } from '../../contexts/UnitContext';

const TemperatureSwitch = () => {

    const { unit, setUnit } = useContext(UnitContext);

    const buttons = unit === 'c' ? (
            <div className='main-panel__buttonGroup'>
                <button onClick={() => setUnit('c')} className='main-panel__buttonGroup-button active'>
                    <span>℃</span>
                </button>
                <button onClick={() => setUnit('f')} className='main-panel__buttonGroup-button'>
                    <span>℉</span>
                </button>
            </div>
    ) : (
        <div className='main-panel__buttonGroup'>
                <button onClick={() => setUnit('c')} className='main-panel__buttonGroup-button'>
                    <span>℃</span>
                </button>
                <button onClick={() => setUnit('f')} className='main-panel__buttonGroup-button active'>
                    <span>℉</span>
                </button>
            </div>
    );

    return (
        <div>
            { buttons }
        </div>
    );
}

export default TemperatureSwitch;
