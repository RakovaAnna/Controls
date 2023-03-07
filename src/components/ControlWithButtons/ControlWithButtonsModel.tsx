import {action, makeObservable, observable} from "mobx"
import {ButtonCollectionProps, ControlWithButtonsProps, InputProps} from "../interfaces";

export class ControlWithButtonsModel {
    value: string = "";
    leftButton: ButtonCollectionProps[] | undefined;
    rightButton: ButtonCollectionProps[] | undefined;
    className?: string | undefined;
    disabled?: boolean;
    inputProps?: InputProps | undefined = undefined;

    constructor(props: ControlWithButtonsProps) {
        makeObservable(this, {
            value: observable,
            changeValue: action,
            handleChange: action
        });
        this.leftButton = props.leftButtons;
        this.rightButton = props.rightButtons;
        this.value = props.defaultValue || '';
        this.className = props.className || '';
        this.disabled = props?.disabled || false;
        this.inputProps = props.inputProps;
    }

    changeValue(value: string) {
        this.value = value;
    }

    handleChange(event: { target: { value: string; }; }) {
        this.value = event.target.value;
    }
}
