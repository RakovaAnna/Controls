import {makeAutoObservable} from "mobx";
import {CountryInfo} from "../../api/apiService";
import {uniqueArray} from "../utilits";
import {AutocompleteProps, InputProps} from "../interfaces";

export class AutocompleteModel {
    curValue: CountryInfo | undefined = undefined;
    options: CountryInfo[] = [];
    showOptions = false;
    userInput = '';
    className?: string = '';
    disabled?: boolean;
    inputProps?: InputProps = undefined;

    private readonly maxOptions: number | undefined = undefined;
    private lastRequestId = -1;
    private activeTimeout: NodeJS.Timeout | null = null;
    private getOptions: (value: string) => Promise<CountryInfo[]>;

    constructor(props: AutocompleteProps) {
        makeAutoObservable(this);
        if (props.defaultValue) {
            this.setNewCurrentValue(props.defaultValue);
        }
        this.className = props.className || '';
        this.inputProps = props.inputProps;
        this.getOptions = props.getOptions;
        this.maxOptions = props.maxOptions;
        this.disabled = props.disabled || false;
    }

    setNewCurrentValue = (newValue: CountryInfo) => {
        this.curValue = newValue;
        this.userInput = `${newValue.name}, ${newValue.fullName}`;
    }

    /*
        Обновление в рамках action
     */
    refreshOptions = (newOptions: CountryInfo[]) => {
        this.options = newOptions;
    }

    /*
        После получения ответа сравниваем актуальный и текущий номера запросов,
        если не совпадают, options не перезаписываем
    */
    requestOptions = (requestId: number) => {
        this.getOptions(this.userInput).then((result) => {
            const uniqueResult = uniqueArray(result);
            if (requestId === this.lastRequestId) {
                if (result.length !== 0) {
                    if (this.maxOptions !== undefined && uniqueResult.length > this.maxOptions) {
                        this.refreshOptions(uniqueResult.slice(0, this.maxOptions));
                    } else  {
                        this.refreshOptions(uniqueResult);
                    }
                } else {
                    this.refreshOptions([]);
                }
            }
        })
    }

    /*
        Каждому запросу присваеваем свой номер по порядку
        и передаем этот номер в запрос.
    */
    callbackTimeout = () => {
        this.lastRequestId += 1;
        this.requestOptions(this.lastRequestId);
        this.activeTimeout = null;
    }

    /*
        При изменении ввода запускаем таймер на 1с,
        чтобы объединить несколько изменений в один запрос
    */
    onChange = (e: { currentTarget: { value: any; }; }) => {
        this.userInput = e.currentTarget.value;
        this.curValue = undefined;
        this.showOptions = true;
        if (this.activeTimeout === null) {
            this.activeTimeout = setTimeout(this.callbackTimeout, 1000);
        }
    };

    onClick = (curVal: CountryInfo) => {
        this.setNewCurrentValue(curVal);
        this.options = [];
        this.showOptions = false;
    };
}