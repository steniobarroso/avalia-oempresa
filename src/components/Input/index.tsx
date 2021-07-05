import React, { InputHTMLAttributes } from 'react';

import { Container }  from './styles'
interface IStyleInputProps extends InputHTMLAttributes<HTMLInputElement> {
    iPadding?:string;
    iPaddingLeft?:string;
    iMarginTop?:string;
    iMarginLeft?:string;
    iMarginRight?:string;
    iRef?: React.RefObject<HTMLInputElement>
    iMenuIsOpen:boolean;
}

// type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IStyleInputProps> = ({...rest}) => (
    <Container ref={rest.iRef} {...rest} />
);

export default Input;