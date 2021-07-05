import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Activity from '../pages/Activity'
import Layout from '../components/Layout';
const Routes: React.FC = () => (
    <BrowserRouter>
    <Layout>
    <Switch>
        {/* <Route path={`/page/1`} exact component={Activity} /> */}
        <Route path={`/page/:index`} exact component={Activity} />
    </Switch>
    </Layout>
    </BrowserRouter>
); 

export default Routes;