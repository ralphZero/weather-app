import React, { useState } from 'react';
import sheet from './SearchLocationForm.module.css';

const SearchLocationForm = (props) => {

    const [location, setlocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={sheet.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={sheet.inputGroup}>
                <span className={sheet.inputIcon+' material-icons'}>search</span>
                <input className={sheet.input} type="text" placeholder='search location' value={location} onChange={(e) => setlocation(e.target.value)}/>
            </div>
            <button className={sheet.button} type="submit">Search</button>
        </form>
    );
}

export default SearchLocationForm;
