import styled from 'styled-components';
import React, { InputHTMLAttributes } from 'react'
interface ITextViewProps extends InputHTMLAttributes<HTMLDivElement> {
    iPadding: string;
    iPaddingLeft?:string;
}

export const Container = styled.div<ITextViewProps>`
    width: ${props => props.width};
    height:${props => props.height};
    color:${props =>props.theme.colors.info};
    align-items:center;
    justify-content:center;
    /* background-color:#fff3; */
    /* margin: 7px 0; */
    padding: ${props => props.iPadding};
    padding-left: ${props => props.iPaddingLeft};
    
`;