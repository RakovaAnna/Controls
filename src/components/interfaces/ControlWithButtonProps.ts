import {ButtonCollectionProps, InputProps} from "./.";

export interface ControlWithButtonsProps {
    defaultValue?: string;
    leftButtons?: ButtonCollectionProps[];
    rightButtons?: ButtonCollectionProps[];
    className?: string;
    disabled?: boolean;
    inputProps?: InputProps;
}
