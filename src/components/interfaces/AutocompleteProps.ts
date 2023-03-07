import {CountryInfo} from "../../api/apiService";
import {InputProps} from "./InputProps";

export interface AutocompleteProps {
    maxOptions?: number;
    getOptions: (value: string) => Promise<CountryInfo[]>;
    inputProps?: InputProps;
    defaultValue?: CountryInfo;
    className?: string;
    disabled?: boolean;
};