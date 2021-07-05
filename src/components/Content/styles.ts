import styled from 'styled-components'

export const Container = styled.div`
grid-area: CT;
color: ${props => props.theme.colors.white};
background-color: ${props => props.theme.colors.secondary};
padding:25px;
/* height:calc(100vh-50px); */
overflow-y:scroll;
::-webkit-scrollbar {
    width:10px; 
}

::-webkit-scrollbar-thumb {
   background-color: ${props => props.theme.colors.gray};
   border-radius:10px;
}

::-webkit-scrollbar-track{
    background-color: ${props => props.theme.colors.tertiary};
}

@media(max-width: 600px){
grid-area: CT;
color: ${props => props.theme.colors.white};
background-color: ${props => props.theme.colors.secondary};
padding:25px;
width:100vw;
/* height:40vh; */
overflow-y:scroll;
::-webkit-scrollbar {
    width:10px; 
}

::-webkit-scrollbar-thumb {
   background-color: ${props => props.theme.colors.gray};
   border-radius:10px;
}

::-webkit-scrollbar-track{
    background-color: ${props => props.theme.colors.tertiary};
}

}

`;

