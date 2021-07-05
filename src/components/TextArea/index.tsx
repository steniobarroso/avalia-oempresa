import React, { TextareaHTMLAttributes } from 'react';

import { Container }  from './styles'
interface IStyleTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    iPadding?:string;
    iPaddingLeft?:string;
    iMarginTop?:string;
    iMarginBottom?:string;
    iMarginLeft?:string;
    iRef?: React.RefObject<HTMLInputElement>;
    iWidth?:string;
    iHeight?:string;
    iMenuIsOpen:boolean;
}

const TextArea: React.FC<IStyleTextAreaProps> = ({...rest}) => (
    <Container {...rest} />
);

export default TextArea;