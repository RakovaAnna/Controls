import React, {FC} from "react";
import {ControlWithButtonsModel, ControlWithButtonsProps, ControlWithButtonsView} from "./.";

export const ControlWithButtons: FC<ControlWithButtonsProps> = (props) => {
    const viewModel = new ControlWithButtonsModel(props);

    return <ControlWithButtonsView viewModel={viewModel} />;
};