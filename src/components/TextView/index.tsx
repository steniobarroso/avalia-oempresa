import React, { InputHTMLAttributes } from 'react';

import { Container }  from './styles'
interface ITextViewProps extends InputHTMLAttributes<HTMLInputElement> {
    iPadding?:string;
    iPaddingLeft?:string;
}

// type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const TextView: React.FC<ITextViewProps> = ({...rest}) => (
    <Container iPadding={String(rest.iPadding)} {...rest} />
);

export default TextView;