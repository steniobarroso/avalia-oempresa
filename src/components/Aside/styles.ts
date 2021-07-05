import styled from 'styled-components'
import React, { LinkHTMLAttributes } from 'react';

interface ILink extends LinkHTMLAttributes<HTMLLinkElement> {
    iChecked: boolean;
}

interface IMenu {
    iMenuIsOpen:boolean;
}

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px){
        display: none;
    }
    
    @media(min-width: 600px){
        visibility: hidden;
        height:0px;
    }
`;

export const Header = styled.header`
    display: flex;
    width:100%;
    height: 50px;
    align-items: center;
    justify-content:flex-start;
    background-color: ${props => props.theme.colors.primary};

    @media(min-width: 600px){
        visibility: hidden;
        height:0px;
    }

`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;
    background-color: ${props => props.theme.colors.primary};

    @media(max-width: 600px){        
        display: none;
    }

    
    @media(min-width: 600px){
        visibility: hidden;
        height:0px;
    }
`;

export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;
    
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};

    transition: opacity .3s;

    &:hover{
        opacity: 0.7;
    }

    display: none;

    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.colors.primary};
    }
    
    @media(min-width: 600px){
        visibility: hidden;
        height:0px;
    }
`;

export const Container = styled.div<IMenu>`
display:flex;
align-items:center;
flex-direction:column;
justify-content:space-between;
grid-area: AS;
background-color: ${props => props.theme.colors.secondary};
border-right: 1px solid ${props => props.theme.colors.gray};
position:relative;

@media(max-width:600px){
    /* padding-left: 7px; */
    /* visibility:${props => props.iMenuIsOpen ? 'visible':'hidden'}; */
    display:flex;
    flex-direction:column;
    position:fixed;
    justify-content:flex-start;
    background-color: ${props => props.theme.colors.secondary};
    z-index:2;
    height:${props => props.iMenuIsOpen ? '100vh':'50px'}
}

`;

export const MenuContainer = styled.nav<IMenu>`
display:flex;
flex-direction:column;
justify-content:start;
margin-top: 10px;
width:100%;
height:30vh;
padding-left:30px;
margin-bottom:5px;
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


@media(max-width:600px){
    /* padding-left: 7px; */
    visibility:${props => props.iMenuIsOpen ? 'visible':'hidden'};
    /* position:fixed;
    z-index:2;
    height:${props => props.iMenuIsOpen ? '100vh':'50px'} */
}

`;
export const MenuItemLink = styled.a<ILink>`
color: ${props => props.theme.colors.black};
text-decoration: none;
/* color:${props => (props.iChecked ? 'salmon' : 'papayawhip')}; */
font-size:15px;
/* margin:7px 0; */
display:flex;
align-items:center;
transition: opacity .3s;
&:hover{
    >div{
        opacity:.40; 
    }
    >svg{
    /* color:${props => (props.iChecked ?  props.theme.colors.primary :  props.theme.colors.black)};    */
    }
}
 &:visited {
    >svg{
    color:${props => (props.iChecked ?  props.theme.colors.primary :  props.theme.colors.black)}; 
    } 
    >div{
        opacity:.40; 
        color:${props => (props.iChecked ?  props.theme.colors.primary :  props.theme.colors.black)};
    }
} 
>svg{
    font-size: 20px;
    margin-right:5px;

}
`;

export const ContainsButtons = styled.div<IMenu>`
display:flex;
flex-direction:row;
justify-content: space-around;


@media(max-width:600px){
    /* padding-left: 7px; */
    visibility:${props => props.iMenuIsOpen ? 'visible':'hidden'};
    /* position:fixed;
    z-index:2;
    height:${props => props.iMenuIsOpen ? '100vh':'50px'} */
}
`;

export const ContainsTextArea = styled.div<IMenu>`
display:flex;
flex-direction:column;
justify-content: space-around;
@media(max-width:600px){
    visibility:${props => props.iMenuIsOpen ? 'visible':'hidden'};
    /* padding-left: 7px;
    position:fixed;
    z-index:2;
    height:${props => props.iMenuIsOpen ? '100vh':'50px'} */
}
`;


export const MenuItemButton = styled.button<IMenu>`
font-size:16px;
color: ${props => props.theme.colors.info};
border:none;
background:none;
font-size:28px;
/* margin:7px 0; */
display:flex;
align-items:center;
transition: opacity .3s;
&:hover{
    opacity:.7
}
>svg{
    font-size: 30px;
    margin-right:5px;

}
@media(max-width:600px){
    visibility:${props => props.iMenuIsOpen ? 'visible':'hidden'};
    /* padding-left: 7px; */
    position:fixed;
    z-index:2;
    height:${props => props.iMenuIsOpen ? '100vh':'50px'}
}
`;

