export interface IButtonProps {
    text: string;
    disabled?: boolean;
    className?: string;
}

export interface ButtonCollectionProps extends IButtonProps {
    func: (value: string) => void;
}

export interface ButtonProps extends IButtonProps {
    func: () => void;
    change: (value: any) => void;
}
