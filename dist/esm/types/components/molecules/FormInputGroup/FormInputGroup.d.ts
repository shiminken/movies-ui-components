import React from "react";
import { Control } from "react-hook-form";
interface Props {
    name: string;
    control?: Control<any> | undefined;
    value?: string | undefined;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
    wrapperClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    errMessage?: string;
    placeholder?: string;
    resetValidate?: () => void;
    type?: string;
    id?: string;
}
declare const FormInputGroup: ({ name, control, resetValidate, ...rest }: Props) => JSX.Element;
export default FormInputGroup;
