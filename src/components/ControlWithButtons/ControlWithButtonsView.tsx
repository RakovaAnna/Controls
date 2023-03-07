import {ControlWithButtonsModel} from "./.";
import React from "react";
import {observer} from "mobx-react-lite";
import {Button} from "../Button";
import {ButtonCollectionProps} from "../interfaces";
import "../Components.style.css";

interface ControlWithButtonsViewProps {
    viewModel: ControlWithButtonsModel;
}

export const ControlWithButtonsView = observer(({viewModel}: ControlWithButtonsViewProps) => {
    const {leftButton, rightButton, className, disabled, inputProps} = viewModel;

    const getCollectionButtons = (colButtons: ButtonCollectionProps[]) => {
        return colButtons.map((value, index) =>
            <Button text={value.text}
                    func={value.func.bind(viewModel, viewModel.value)}
                    key={index}
                    change={viewModel.changeValue.bind(viewModel)}
                    className={value.className}
                    disabled={disabled || value.disabled}
            />
        )
    }

    return (
        <div className={`container ${className}`}>
            {leftButton && getCollectionButtons(leftButton)}
            <input
                type="text"
                value={viewModel.value}
                onChange={viewModel.handleChange.bind(viewModel)}
                {...inputProps}
                disabled={disabled}
            />
            {rightButton && getCollectionButtons(rightButton)}
        </div>
    )
});
