import React from "react";
import {CountryInfo} from "../../api/apiService";
import {observer} from "mobx-react-lite";
import {AutocompleteModel} from "./.";

interface AutocompleteViewProps {
    viewModel: AutocompleteModel;
}

export const AutocompleteView = observer(({viewModel}: AutocompleteViewProps) => {

    // Получение коллекции подсказок
    const getCollectionOptions = (collectionOptions: CountryInfo[]) => {
        if (viewModel.showOptions && viewModel.userInput) {
            if (collectionOptions.length === 0) {
                return (
                    <ul className="drop_list">
                        <li className="no-options">Записи не найдены</li>
                    </ul>
                )
            } else {
                return (
                    <ul className="drop_list options">
                        {collectionOptions.map((value, index) => {
                            return (
                                <li key={index} onClick={viewModel.onClick.bind(viewModel, value)}>
                                    <img src={value.flag} className={'img_flag img_li'}
                                         alt="Флаг"/> {value.name}, {value.fullName}
                                </li>
                            );
                        })}
                    </ul>
                );
            }
        }
        return <></>;
    }


    return (
        <React.Fragment>
            <div className='autocomplete_main'>
                <div className="search">
                    {viewModel.curValue &&
                        <img src={viewModel.curValue.flag} className='img_flag img_input' alt='Флаг'/>}
                    <input
                        type="text"
                        className={viewModel.curValue ? "search-box with-img" : "search-box"}
                        onChange={viewModel.onChange.bind(viewModel)}
                        value={viewModel.userInput}
                    />
                </div>
                {getCollectionOptions(viewModel.options)}
            </div>
        </React.Fragment>
    );
});
