import React, { useContext } from 'react';
import sheet from './ModalPanel.module.css';
import { ModalContext } from '../contexts/ModalContext';
import SearchLocationForm from './searchLocation/SearchLocationForm';

const ModalPanel = () => {

    const { status, dispatch } = useContext(ModalContext);

    const show = status ? {display: 'block'} : { display: 'none'};

    const handleClose = (e, origin) => {

        let parent;
        let content;

        console.log('CurrentTarget',e.currentTarget, 'Target', e.target, 'Origin', origin);

        if(origin === 'close'){
            parent = e.currentTarget.parentElement;
            content = parent.lastChild;
            console.log(parent, content);
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

    return (
        <div style={show} className={sheet.container} onClick={(e) => handleClose(e, 'container')}>
            <div className={sheet.modal + ' ' + sheet.modalOpen}>
                <div className={sheet.close} onClick={(e) => handleClose(e, 'close')}>
                    <span className='material-icons'>close</span>
                </div>
                <div className={sheet.content +' '+ sheet.fadeIn}>
                    <SearchLocationForm />
                </div>
            </div>
        </div>
    );
}

export default ModalPanel;
