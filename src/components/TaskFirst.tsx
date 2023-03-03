import React from "react";
import {ControlWithButtons} from "./ControlWithButtons";
import './Components.style.css';

function TaskFirst() {
    const exampleFirst = {
        rightButtons: [
            {text: 'Очистить', func: () => ''},
            {text: 'Поменять', func: () => 'Hello world'},
        ]
    };
    const exampleSecond = {
        leftButtons: [
            {text: 'Вызвать в Alert', func: (value: any) => alert(value)},
        ],
        rightButtons: [
            {
                text: 'Проверка на число',
                func: (value: string | number) => {
                    if (!isNaN(parseFloat(value as string)) && isFinite(value as number)) {
                        alert(value)
                    }
                }
            },
        ]
    };

    return (
        <div className='block'>
            <h1>Контрол с кнопками</h1>
            <ControlWithButtons {...exampleFirst}/>
            <br/>
            <ControlWithButtons {...exampleSecond}/>
        </div>
    )
}

export default TaskFirst;