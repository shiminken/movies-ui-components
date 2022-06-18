import React, { CSSProperties } from "react";
import { InputProps } from "@mui/material";
export interface TextInputProps extends InputProps {
    errMessage?: string;
    label?: string | JSX.Element;
    style?: CSSProperties;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    name?: string;
    className?: string;
    wrapperClassName?: string;
    required?: boolean;
    helperClassName?: string;
    autoComplete?: string;
    type?: string;
}
declare const _default: React.NamedExoticComponent<TextInputProps>;
export default _default;
