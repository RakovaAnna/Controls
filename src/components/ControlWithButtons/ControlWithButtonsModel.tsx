import {action, makeObservable, observable} from "mobx"
import {ButtonCollectionProps} from "../Button";

export type ControlWithButtonsProps = {
    leftButtons?: ButtonCollectionProps[];
    rightButtons?: ButtonCollectionProps[];
};

export class ControlWithButtonsModel {
    value = "";
    leftButton;
    rightButton;

    constructor(props: ControlWithButtonsProps) {
        makeObservable(this, {
            value: observable,
            changeValue: action,
            handleChange: action
        });
        this.leftButton = props.leftButtons;
        this.rightButton = props.rightButtons;
    }

    changeValue(value: string) {
        this.value = value;
    }

    handleChange(event: { target: { value: string; }; }) {
        this.value = event.target.value;
    }
}
