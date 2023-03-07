import React from "react";
import {ButtonModel} from "./ButtonModel";
import '../Components.style.css';

interface ButtonViewProps {
    viewModel: ButtonModel;
}

export const ButtonView = ({viewModel}: ButtonViewProps) => (
    <button className={`btn ${viewModel.className}`}
            onClick={viewModel.onClick.bind(viewModel)}
            disabled={viewModel.disabled}
    >
        {viewModel.text}
    </button>
);


