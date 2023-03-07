import React, {FC} from "react";
import {ControlWithButtonsModel, ControlWithButtonsView} from "./.";
import {ControlWithButtonsProps} from "../interfaces";

export const ControlWithButtons: FC<ControlWithButtonsProps> = (props) => {
    const viewModel = new ControlWithButtonsModel(props);

    return <ControlWithButtonsView viewModel={viewModel} />;
};