import React, { useContext } from 'react';
import sheet from './ModalPanel.module.css';
import { ModalContext } from '../contexts/ModalContext';
import { WeatherContext } from '../contexts/WeatherContext';
import SearchLocationForm from './searchLocation/SearchLocationForm';
import SearchLocationItem from './searchLocation/SearchLocationItem';

const ModalPanel = () => {

    const { status, dispatch } = useContext(ModalContext);

    const show = status ? {display: 'block'} : { display: 'none'};

    const handleClose = (e, origin) => {

        let parent;
        let content;

        if(origin === 'close'){
            parent = e.currentTarget.parentElement;
            content = parent.lastChild;
        }else if(origin === 'container' && e.target.className === sheet.container){
            parent = e.target.firstChild;
            content = parent.lastChild;
        }else{
            return;
        }

        content.classList.remove(sheet.fadeIn);
        content.classList.add(sheet.fadeOut);

        parent.classList.remove(sheet.modalOpen);
        parent.classList.add(sheet.modalClose);


        setTimeout(() => {
            dispatch({type: 'HIDE_MODAL'});

            content.classList.remove(sheet.fadeOut);
            content.classList.add(sheet.fadeIn);

            parent.classList.remove(sheet.modalClose);
            parent.classList.add(sheet.modalOpen);

        }, 350);
       
    }

    const [data, setData] = React.useState([]);

    const { locationDispatch } = useContext(WeatherContext);

    const handleCitySelected = (data) => {
        locationDispatch({
            type: 'CHANGE_LOCATION',
            location: {
                title: data.title,
                woeid: data.woeid
            }
        });
        dispatch({type: 'HIDE_MODAL'});
    }

    let resList = data.map((city) => {
        return (
            <SearchLocationItem key={city.woeid} id={city.woeid} title={city.title} onItemClick={handleCitySelected}/>
        );
    });

    return (
        <div style={show} className={sheet.container} onClick={(e) => handleClose(e, 'container')}>
            <div className={sheet.modal + ' ' + sheet.modalOpen}>
                <div className={sheet.close} onClick={(e) => handleClose(e, 'close')}>
                    <span className='material-icons'>close</span>
                </div>
                <div className={sheet.content +' '+ sheet.fadeIn}>
                    <SearchLocationForm data={setData} />
                    <div className={sheet.itemListContainer}>
                        { resList }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPanel;
