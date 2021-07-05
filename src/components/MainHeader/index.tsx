import React,{useMemo,useState,useEffect,useRef,InputHTMLAttributes} from 'react';
import {Container} from './styles';
import ContentHeader from '../ContentHeader'
import {useHistory} from 'react-router-dom';

const MainHeader: React.FC = () => {
    const history = useHistory();
    // history.replace(`/${strings.applicationPath}`)
    return(
        <Container>   
            <ContentHeader title='AVA TESTE'>
                {/* <SelectInputCampaign options={options} onChange ={()=>{}}></SelectInputCampaign> */}
            </ContentHeader>
        </Container>
        
    );
}
export default MainHeader;