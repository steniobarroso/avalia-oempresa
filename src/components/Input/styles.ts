import styled from 'styled-components';
import React, { InputHTMLAttributes } from 'react'
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    iPadding?: string;
    iPaddingLeft?:string;
    iMarginTop?:string;
    iMarginLeft?:string;
    iMarginRight?:string;
}

export const Container = styled.input<IInputProps>`
    width: ${props => props.width};
    height:${props => props.height};
    margin-top:${props => props.iMarginTop};
    margin-left:${props => props.iMarginLeft};
    margin-right:${props => props.iMarginRight};
    /* margin: 7px 0; */
    padding: ${props => props.iPadding};
    padding-left: ${props => props.iPaddingLeft};
    border-radius: 5px;
    border:1px solid grey;
    
    &::placeholder{
        display:flex;
        color: #00085ff9;
        opacity: 0.8;
        align-items:flex-start;
        justify-items:flex-start;
        text-align:start
    }

   
`;