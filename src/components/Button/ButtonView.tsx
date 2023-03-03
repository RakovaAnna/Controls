import React from "react";
import {ButtonModel} from "./ButtonModel";
import '../Components.style.css';

interface ButtonViewProps {
    viewModel: ButtonModel;
}

export const ButtonView = ({viewModel}: ButtonViewProps) => (
    <button className='btn' onClick={viewModel.onClick.bind(viewModel)}>
        {viewModel.text}
    </button>
);


