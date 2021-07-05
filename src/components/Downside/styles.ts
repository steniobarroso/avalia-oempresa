import styled from 'styled-components'
export const Container = styled.div`
grid-area: AD;
background-color: ${props => props.theme.colors.secondary};
/* padding-left:20px; */
border-right: 1px solid ${props => props.theme.colors.gray};
border-top: 1px solid ${props => props.theme.colors.gray};
/* height:calc(100vh-50px); */
`;



