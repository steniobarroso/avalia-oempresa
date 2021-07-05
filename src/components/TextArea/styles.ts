import styled from 'styled-components';
import React, { TextareaHTMLAttributes } from 'react'
interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    iPadding?: string;
    iPaddingLeft?:string;
    iMarginTop?:string;
    iMarginLeft?:string;
    iWidth?:string;
    iHeight?:string;
    iMarginBottom?:string;
    iMenuIsOpen:boolean
}
export const Container = styled.textarea<ITextAreaProps>`
    width: ${props => props.iWidth};
    height:${props => props.iHeight};
    margin-top:${props => props.iMarginTop};
    margin-left:${props => props.iMarginLeft};
    margin-bottom:${props => props.iMarginBottom};
    /* margin: 7px 0; */
    padding: ${props => props.iPadding};
    padding-left: ${props => props.iPaddingLeft};
    border-radius: 5px;
    border:1px solid grey;
    
    &::placeholder{
        display:flex;
        color: #00085ff9;
        opacity: 0.8;
        align-items:flex-flex-start;
        justify-items:flex-start;
        text-align:start
    }

    &::-webkit-input-placeholder {
   text-align:start;
    }

    &:-moz-placeholder { /* Firefox 18- */
    text-align:start;  
    }

    &::-moz-placeholder {  /* Firefox 19+ */
    text-align:start;  
    }

    &:-ms-input-placeholder {  
    text-align:start; 
    }
    
/* @media(max-width:600px){
    padding-left: 7px;
    position:fixed;
    z-index:2;
    height:${props => props.iMenuIsOpen ? '100vh':'50px'}
} */
    
`;