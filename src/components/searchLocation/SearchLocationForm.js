import axios from 'axios';
import React, { useState } from 'react';
import sheet from './SearchLocationForm.module.css';

const SearchLocationForm = ({ data }) => {

    const [location, setlocation] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmit = (e) => {
        setIsFetching(true);
        e.preventDefault();
        axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query='+location+'',{
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then((res) => {
            setIsFetching(false);
            data(res.data);
        }).catch((err) => setIsFetching(false));
    }

    return (
        <form className={sheet.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={sheet.inputGroup}>
                <span className={sheet.inputIcon+' material-icons'}>search</span>
                <input className={sheet.input} disabled={isFetching} type="text" placeholder='search location' value={location} onChange={(e) => setlocation(e.target.value)}/>
            </div>
            <button className={sheet.button} type="submit" disabled={isFetching}>Search</button>        
        </form>
    );
}

export default SearchLocationForm;
