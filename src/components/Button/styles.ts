import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    iPadding?: string;
    iPaddingLeft?:string;
    iWidth?:string;
    iHeight?:string;
    iBackgroundColor?:string;
    iMarginLeft?: string;
    iMenuIsOpen:boolean;
}
export const Container = styled.button<IButtonProps>`
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${props => props.iWidth};
    /* margin: 7px 0; */
    margin-left: ${props => props.iMarginLeft};
    padding: ${props => props.iPadding};
    height:${props => props.iHeight};
    border-radius: 5px;
    padding-left:${props => props.iPaddingLeft};
    font-weight: bold;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.iBackgroundColor};
    transition: opacity .3s;
    &:hover{
        opacity: .7;
    }
    >svg{
    font-size: 20px;
    margin-right:5px;
    }   

    @media(max-width:600px){
    visibility:${props => props.iMenuIsOpen ? 'visible':'hidden'};
    /* padding-left: 7px;
    position:fixed;
    z-index:2;
    height:${props => props.iMenuIsOpen ? '100vh':'50px'} */
}
`;