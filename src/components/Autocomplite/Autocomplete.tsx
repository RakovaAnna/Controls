import React, {FC} from 'react';
import './Autocomplete.style.css';
import {AutocompleteModel, AutocompleteView} from "./.";
import {AutocompleteProps} from "../interfaces";

export const Autocomplete: FC<AutocompleteProps> = (props) => {
    const viewModel = new AutocompleteModel(props);

    return <AutocompleteView viewModel={viewModel} />;
};
