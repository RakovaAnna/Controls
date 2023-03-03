export type ButtonCollectionProps = {
    text: string;
    func: (value: string) => void;
}

export type ButtonProps = {
    text: string;
    func: () => void;
    change: (value: any) => void;
}

export class ButtonModel {
    text;
    func;
    change;

    constructor(props: ButtonProps) {
        this.text = props.text;
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