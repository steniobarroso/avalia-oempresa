import styled from 'styled-components'

export const Grid = styled.div`
display:grid;
grid-template-columns:250px auto;
grid-template-rows: 50px auto;
grid-template-areas:
'MH MH'
'AS CT'
'AD CT'
'AD CT';
height:100vh;
width:100vw;
@media(max-width: 600px){
    display:grid;
            grid-template-columns:250px auto;
            grid-template-rows: 50px auto;
            grid-template-areas:
            'MH MH'
            'CT CT';
            /* width:100vw; */
            height:100vh;
}
`;

