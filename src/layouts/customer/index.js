import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { CustomerHomePage, CustomerProfilePage } from '../../pages/customer';

const CustomerLayout = ({ match }) =>
<div>
    <h2>Customer Layout Header</h2> 
    
    <Switch>
        <Route exact path={`${match.path}home`} component={CustomerHomePage} />
        <Route exact path={`${match.path}profile`} component={CustomerProfilePage} />

        <Route path=''>
            <Redirect to='/404' />
        </Route>
    </Switch>
    
    <h2>Customer Layout Footer</h2> 
</div>;

export default CustomerLayout;