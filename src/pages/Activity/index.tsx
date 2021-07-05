import React,{useState,useEffect} from 'react';
import {Container,Content} from './styles'
import Atividade from '../../utils/Atividade';
interface IRouteParams {
    match: {
        params: {
            index: string;
            // id_usuario: string;
        }
    }
}

 const Activity:React.FC<IRouteParams> =  ({match}) => {
    const [content,setContent]= useState('')
    const [recover,setRecover]= useState('')

    let listActivity: Array<Atividade> = new Array
    const values = async ()=>{
    let str:string = localStorage.getItem('@activity-valuePage1-ava:value')  || '{}'
    listActivity =  await JSON.parse(str);
    listActivity
    .filter(e => e.id == parseInt(match.params.index)) 
    .map(e => {setContent(e.conteudo)})
}

useEffect(()=>{
    values();
},[recover]);

    return(
        <Container>
            <Content>
                {content}
            </Content>
        </Container>
    );
}
export default Activity;
