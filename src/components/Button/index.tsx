import React, { ButtonHTMLAttributes } from 'react';
import { Container }  from './styles'
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    iPadding?:string;
    iPaddingLeft?:string;
    iWidth?:string;
    iHeight?:string;
    iBackgroundColor?:string;
    iMarginLeft?: string;
    iMenuIsOpen:boolean;
    
}

// type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({children, ...rest }) => (
    <Container {...rest}>
        {children}
    </Container>
);

export default Button;