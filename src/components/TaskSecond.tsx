import React from "react";
import {Autocomplete} from "./Autocomplite";
import {getCountryByName} from "../api/apiService";
import './Components.style.css';

function TaskSecond() {
    return (
        <div className='block'>
            <h1>Автокомплит</h1>
            <Autocomplete
                getOptions={getCountryByName}
                maxOptions={10}
                inputProps={{className: 'custom_input', placeholder: 'Начните вводить страну'}}
            />
            <Autocomplete
                getOptions={getCountryByName}
                defaultValue={{
                    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/50px-Flag_of_Algeria.svg.png",
                    fullName: "Алжирская Народная Демократическая Республика",
                    name:"Алжир"
                }}
                maxOptions={3}/>
        </div>
    )
}

export default TaskSecond;