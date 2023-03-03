import {ControlWithButtonsModel} from "./.";
import React from "react";
import {observer} from "mobx-react-lite";
import {Button, ButtonCollectionProps} from "../Button";
import "../Components.style.css";

interface ControlWithButtonsViewProps {
    viewModel: ControlWithButtonsModel;
}

export const ControlWithButtonsView = observer(({viewModel}: ControlWithButtonsViewProps) => {
    const {leftButton, rightButton} = viewModel;

    const getCollectionButtons = (colButtons: ButtonCollectionProps[]) => {
        return colButtons.map((value, index) =>
            <Button text={value.text} func={value.func.bind(viewModel, viewModel.value)} key={index}
                    change={viewModel.changeValue.bind(viewModel)}/>
        )
    }

    return (
        <div className='container'>
            {leftButton && getCollectionButtons(leftButton)}
            <input type="text" value={viewModel.value} onChange={viewModel.handleChange.bind(viewModel)}/>
            {rightButton && getCollectionButtons(rightButton)}
        </div>
    )
});
