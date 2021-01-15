import React, { useContext } from 'react';
import bgImg from '../media/Cloud-background.png';
import shower from '../media/Shower.png';
import { ModalContext } from '../contexts/ModalContext';

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

    const { dispatch } = useContext(ModalContext);

    return (
        <div className='side-panel' style={panelStyle}>
            <div className='side-panel__buttonGroup'>
                <button onClick={(e) => dispatch({type: 'SHOW_MODAL'})} className='side-panel__button'>Seach for places</button>
                <button className='side-panel__button side-panel__button--round'>
                    <span className='material-icons'>my_location</span>
                </button>
            </div>
            <div style={columnStyle}>
                <img className='side-weather-img' src={shower} alt="img"/>
                <h1 className='side-weather-temp'>15<span className='side-weather-temp__measure'>℃</span></h1>
            </div>
            <br/>
            <div style={columnStyle}>
                <h3 style={{color : `var(--side-micro-text)`}}>Shower</h3>
                <span style={rowStyle}>
                    <span>Today</span>
                    <span>•</span>
                    <span>Fri, 5 Jun</span>
                </span>
                <div>
                    <div style={{color : `var(--side-micro-text)`}} className='side-panel__button side-panel__button--row side-panel__button--transparent'>
                        <span className='material-icons'>place</span>
                        <span>Helsinki</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidePanel;