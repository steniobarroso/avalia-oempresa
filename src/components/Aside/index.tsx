import React,{useState,useEffect,LinkHTMLAttributes} from 'react';
import {Container,MenuContainer,MenuItemLink,ContainsButtons,ContainsTextArea,Header,ToggleMenu,LogImg,Title} from './styles'
import Button from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';
import {FiCheck} from 'react-icons/fi';
import { BsFileEarmarkMinus,BsFileEarmarkPlus } from "react-icons/bs";
import {
    MdClose,
    MdMenu, 
} from 'react-icons/md';
import Atividade from '../../utils/Atividade';
import valueContent from '../../repositories/valueContent';
import logoImg from '../../assets/logo.svg';

let atividade;
let listActivity: Array<Atividade>  = new Array;
let str:string;
let i=0;
str = localStorage.getItem('@activity-valuePage1-ava:value')  || '{}'
async  function recoverList(){
    if( str != '{}'){
        listActivity =  await JSON.parse(str);
    }else{
        atividade = new Atividade(1, "Atividade1",false,valueContent);
        listActivity.push(atividade)
        localStorage.setItem('@activity-valuePage1-ava:value', JSON.stringify(listActivity));
    }
}

recoverList();
interface IMenu  {
    iIdActivity:number;
    isChecked:boolean;
    iOnclick():void;
    iActivityName:string;   
}

const Aside: React.FC = () => {
    
    const [isChecked,setChecked]= useState(false)
    const [recover, setRecover] = useState<Atividade[]>(listActivity)
    const [count,setCount] = useState(1);
    const [activityName,setActivityName] = useState("Atividade1");
    const [aConteudo,setAConteudo] = useState("Atividade1");
    const [toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

 
    const values = async ()=>{
        // let str:string = localStorage.getItem('@activity-valuePage1-ava:value')  || '{}'
        // listActivity =  await JSON.parse(str);
        setRecover(listActivity);
        }
        // values();
    useEffect(()=>{
        values();
        // setUseStateListActivity(useStateListActivity);
    },[count]);
    return(
        <Container iMenuIsOpen={toggleMenuIsOpened} >
             <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                { toggleMenuIsOpened ? <MdClose /> : <MdMenu /> }
                </ToggleMenu>

                <LogImg src={logoImg}  />
                <Title>AVA TESTE</Title>
            </Header>
              <MenuContainer iMenuIsOpen={toggleMenuIsOpened}>
            {recover[0] != undefined ? recover.map(
                item=>{
                    ++i
                    return(<Menu key={recover[item.id-1].id-1   } iIdActivity={recover[item.id-1].id} iActivityName={recover[item.id-1].atividade}  isChecked={recover[item.id-1].checked} 
                    iOnclick={
                        async ()=>{
                            str = localStorage.getItem('@activity-valuePage1-ava:value')  || '{}'
                            listActivity =  await JSON.parse(str);
                            listActivity
                            // .filter(e => e.id == item.id) 
                            .map(e => {
                                    e.checked = false;
                                    localStorage.setItem('@activity-valuePage1-ava:value', JSON.stringify(listActivity));
                                    if(e.id == item.id){
                                        e.checked = true;
                                        isChecked ? setChecked(false):setChecked(true);
                                        localStorage.setItem('@activity-valuePage1-ava:value', JSON.stringify(listActivity));
                                    }
                                  
                            })
                           
                    }
                    }

                    ></Menu>)
                } ):[]}
             </MenuContainer>
                 <ContainsTextArea iMenuIsOpen={toggleMenuIsOpened}>
                        <ContainsButtons iMenuIsOpen={toggleMenuIsOpened} >
                                <Button iMenuIsOpen={toggleMenuIsOpened} onClick={()=>{
                                    if(listActivity.length > 1) {
                                        listActivity.pop();
                                        localStorage.setItem('@activity-valuePage1-ava:value', JSON.stringify(listActivity));
                                        setCount(listActivity.length-1);
                                        }
                                    }
                                    } iPaddingLeft='3px' iBackgroundColor='#3e3d42'  iWidth='30px' iHeight='30px' type='button' ><BsFileEarmarkMinus /></Button>
                                    <Input iMenuIsOpen={toggleMenuIsOpened} iMarginLeft='10px' iMarginRight='10px' width='150px' onChange={(e) => {setActivityName(e.target.value)}} iPaddingLeft='10px' aria-placeholder='#24455'  placeholder='Nome da Atividade...'/>
                                <Button iMenuIsOpen={toggleMenuIsOpened} onClick={()=>{
                                    let xconteudo;
                                    aConteudo == "Atividade1" ? xconteudo = "Atividade"+ (listActivity.length+1):xconteudo = aConteudo;
                                    atividade = new Atividade(listActivity.length+1,`${activityName=="Atividade1" ?"Atividade"+ (listActivity.length+1) : activityName}`,false,xconteudo);
                                    listActivity.push(atividade)
                                    localStorage.setItem('@activity-valuePage1-ava:value', JSON.stringify(listActivity));
                                    setCount(listActivity.length);
                                }
                                } iPaddingLeft='3px' iBackgroundColor='#3e3d42'  iWidth='30px' iHeight='30px' type='button' ><BsFileEarmarkPlus /></Button>
                    </ContainsButtons>
                    
                        <TextArea iMenuIsOpen={toggleMenuIsOpened} onChange={(e) => {setAConteudo(e.target.value)}} iPaddingLeft='10px' aria-placeholder='#24455' iWidth='240px' iHeight='100px' iMarginTop='10px' iMarginBottom='10px' placeholder='Insira o conteudo...'/>
                
                </ContainsTextArea>
               </Container>
    );
}
export default Aside;

const Menu: React.FC<IMenu> = ({...rest}) =>{
    return(
            <MenuItemLink onClick={rest.iOnclick}
            key={rest.iIdActivity+3} iChecked={rest.isChecked} href={`/page/${rest.iIdActivity}`}>
                <FiCheck key={rest.iIdActivity+1} />
                <div key={rest.iIdActivity+2}>{rest.iActivityName}</div>
            </MenuItemLink>
    )
}

