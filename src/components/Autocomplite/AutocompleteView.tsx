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
                    <ul>
                        <li className="no-options">Записи не найдены</li>
                    </ul>
                )
            } else {
                return (
                    <ul className="options">
                        {collectionOptions.map((value, index) => {
                            return (
                                <li key={index} onClick={viewModel.onClick.bind(viewModel, value)}>
                                    <img src={value.flag} alt="Флаг"/> {value.name}, {value.fullName}
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
            <div className='wrap'>
                <div className="search">
                    {viewModel.value && <img src={viewModel.value.flag} className='img-flag' alt='Флаг'/>}
                    <input
                        type="text"
                        className={viewModel.value ? "search-box with-img" : "search-box"}
                        onChange={viewModel.onChange.bind(viewModel)}
                        value={viewModel.userInput}
                    />
                </div>
                {getCollectionOptions(viewModel.options)}
            </div>
        </React.Fragment>
    );
});
