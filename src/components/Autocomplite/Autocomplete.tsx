import React, {FC} from 'react';
import './Autocomplete.style.css';
import {AutocompleteModel, AutocompleteProps, AutocompleteView} from "./.";

export const Autocomplete: FC<AutocompleteProps> = (props) => {
    const viewModel = new AutocompleteModel(props);

    return <AutocompleteView viewModel={viewModel} />;
};
