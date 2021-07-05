import React from 'react';
import {Grid} from './styles'
import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Downside from '../Downside'
import Content from '../Content'
const Layout: React.FC = ({children}) => 
    (
        <Grid>
           <MainHeader/>
           <Aside/>
           <Downside/>
           <Content>
                {children}
           </Content>
        </Grid>
    );

export default Layout;