import styled from 'styled-components'

interface IProps {
    iWidth?: string;
    iPaddingLeft?: string;
}

export const Container = styled.div`
grid-area: MH;
background-color: ${props => props.theme.colors.primary};
display:flex;
/* width:100vw; */
justify-content:space-between;
align-items:center;
padding:0 10px;
border-bottom: 1px solid ${props => props.theme.colors.gray};
`;
