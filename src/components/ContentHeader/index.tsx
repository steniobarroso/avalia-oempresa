import React from 'react';
import {Container,Controllers} from './styles'
import { Color } from '@material-ui/core';

interface IContentHeaderProps {
    title: string;
    children: React.ReactNode
}

const ContentHeader: React.FC<IContentHeaderProps> = ({title,children}) => {
    return(
        <Container>
                <h4>{title}</h4> 
            <Controllers>
               {children}
            </Controllers>
        </Container>
    );
}
export default ContentHeader;