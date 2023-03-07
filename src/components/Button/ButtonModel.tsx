import {ButtonProps} from "../interfaces";

export class ButtonModel {
    text: string;
    disabled?: boolean;
    className?: string;
    func: () => void;
    change: (value: any) => void;

    constructor(props: ButtonProps) {
        this.text = props.text;
        this.disabled = props?.disabled || false;
        this.className = props?.className || '';
        this.func = props.func;
        this.change = props.change;
    }

    onClick() {
        const funcResult = this.func();
        if (funcResult !== undefined) {
            this.change(funcResult);
        }
    }
}