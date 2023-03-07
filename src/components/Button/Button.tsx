import React, {FC} from "react";
import {ButtonModel, ButtonView} from "./.";
import {ButtonProps} from "../interfaces";

export const Button: FC<ButtonProps> = (props) => {
    const viewModel = new ButtonModel(props);

    return <ButtonView viewModel={viewModel}/>;
};