import React from 'react';
import sheet from './SearchLocationItem.module.css';

const SearchLocationItem = ({ id, title, onItemClick }) => {
    return (
        <div key={id} onClick={() => onItemClick({title, woeid: id})} className={sheet.container}>
            <span>{title}</span>
            <span className={'material-icons '+sheet.icon}>chevron_right</span>
        </div>
    );
}

export default SearchLocationItem;
