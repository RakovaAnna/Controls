import React from "react";
import {Autocomplete} from "./Autocomplite";
import {getCountryByName} from "../api/apiService";
import './Components.style.css';

function TaskSecond() {
    return (
        <div className='block'>
            <h1>Автокомплит</h1>
            <Autocomplete getOptions={getCountryByName} maxOptions={10}/>
            <Autocomplete getOptions={getCountryByName} maxOptions={3}/>
        </div>
    )
}

export default TaskSecond;