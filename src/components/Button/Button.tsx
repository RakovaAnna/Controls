import React, {FC} from "react";
import {ButtonModel, ButtonProps, ButtonView} from "./.";

export const Button: FC<ButtonProps> = (props) => {
    const viewModel = new ButtonModel(props);

    return <ButtonView viewModel={viewModel}/>;
};