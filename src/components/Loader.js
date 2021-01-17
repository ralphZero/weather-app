import React from 'react';
import sheet from './Loader.module.css';

const Loader = (props) => {
    return (
        <div className={sheet.container}>
            <div className={sheet.loader}></div>
            <span className={sheet.text}>Loading..</span>
        </div>
    );
}

export default Loader;
