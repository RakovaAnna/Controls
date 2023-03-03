import {makeAutoObservable} from "mobx";
import {CountryInfo} from "../../api/apiService";
import {uniqueArray} from "../utilits";

export type AutocompleteProps = {
    maxOptions?: number;
    getOptions: (value: string) => Promise<CountryInfo[]>;
};

export class AutocompleteModel {
    curValue: CountryInfo | undefined = undefined;
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
        this.curValue = undefined;
        this.getOptions(userInput).then((result) => {
            const uniqueResult = uniqueArray(result);
            if (result.length !== 0) {
                if (this.maxOptions !== undefined && uniqueResult.length > this.maxOptions) {
                    this.refreshOptions(uniqueResult.slice(0, this.maxOptions));
                } else  {
                    this.refreshOptions(uniqueResult);
                }
            } else {
                this.refreshOptions([]);
            }

        })
        this.showOptions = true;
        this.userInput = userInput;
    };

    onClick = (curVal: CountryInfo) => {
        this.curValue = curVal;
        this.options = [];
        this.showOptions = false;
        this.userInput = `${curVal.name}, ${curVal.fullName}`;
    };
}