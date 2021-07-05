import styled from 'styled-components'


interface IProps {
    iWidth?: string;
    iMarginleft?: string;
    iHeight?:string;
    iMarginTop?:string;
    iMarginLeft?:string;
    iPadding?:string;
    iPaddingLeft?:string;
    iNameCommponent?:string;
}

export const Container = styled.div`
display:flex;
/* height:100%; */
width:100%;
flex-direction:column;
/* justify-content:flex-start;
align-items:flex-start; */
/* background-color:#ff69; */
`;

export const Content = styled.div`
display:flex;
flex-direction:column;
color: ${props => props.theme.colors.primary};
`;




