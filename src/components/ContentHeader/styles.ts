import styled from 'styled-components'
interface ITitleContainer {
    lineColor:string; 
}
export const Container = styled.div`
    /* display:flex;
    width:100%;  */
    justify-content:space-between;
    > h4{
    color: ${props => props.theme.colors.white};
    }
    
`;

export const Controllers = styled.div`
    display:flex;
    
`;

