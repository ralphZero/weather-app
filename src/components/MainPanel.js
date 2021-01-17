import React from 'react';
import HighlightBloc from './tempGroup/HighlightBloc';
import TempDataList from './tempGroup/TempDataList';
import TemperatureSwitch from './tempGroup/TemperatureSwitch';

const MainPanel = () => {
    return (
        <div className='main-panel'>
            <TemperatureSwitch />
            <div>
                <TempDataList />
                <HighlightBloc />
            </div>
            <div className='footer'>Ralph Placide @ DevChallenges</div>
        </div>
    );
}

export default MainPanel;