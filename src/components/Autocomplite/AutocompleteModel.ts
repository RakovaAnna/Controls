import {makeAutoObservable} from "mobx";
import {CountryInfo} from "../../api/apiService";

export type AutocompleteProps = {
    maxOptions?: number;
    getOptions: (value: string) => Promise<CountryInfo[]>;
};

export class AutocompleteModel {
    value: CountryInfo | undefined = undefined;
    options: CountryInfo[] = [];
    showOptions = false;
    userInput = '';
    maxOptions: number | undefined = undefined;
    private getOptions: (value: string) => Promise<CountryInfo[]>;

    constructor(props: AutocompleteProps) {
        makeAutoObservable(this);
        this.getOptions = props.getOptions;
        this.maxOptions = props.maxOptions;
    }

    // Обновление в рамках action
    refreshOptions = (newOptions: CountryInfo[]) => {
        this.options = newOptions;
    }

    onChange = (e: { currentTarget: { value: any; }; }) => {
        const userInput = e.currentTarget.value;
        this.value = undefined;
        this.getOptions(userInput).then((result) => {
            if (result.length !== 0) {
                // Убираем повторяющиеся значения
                const uniqueArray = result.filter(function(item, pos) {
                    return result.lastIndexOf(item) === pos;
                })
                if (this.maxOptions !== undefined && uniqueArray.length > this.maxOptions) {
                    this.refreshOptions(uniqueArray.splice(0, this.maxOptions));
                }
            } else {
                this.refreshOptions(result);
            }

        })
        this.showOptions = true;
        this.userInput = userInput;
    };

    onClick = (curVal: CountryInfo) => {
        this.value = curVal;
        this.options = [];
        this.showOptions = false;
        this.userInput = `${curVal.name}, ${curVal.fullName}`;
    };
}