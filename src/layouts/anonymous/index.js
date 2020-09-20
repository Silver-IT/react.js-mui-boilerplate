import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';


import { LandingPage, AboutUsPage } from '../../pages/anonymous';
import { Error404Page, Error500Page } from '../../pages/errors';

const AnonymousLayout = ({ match }) =>
<div>
    <h2>Anonymous Layout Header</h2> 

    <Switch>
        <Route exact path={`${match.path}`} component={LandingPage} />
        <Route exact path={`${match.path}about-us`} component={AboutUsPage} />

        <Route exact path='/404' component={Error404Page} />
        <Route exact path='/500' component={Error500Page} />

        <Route path=''>
            <Redirect to='/404' />
        </Route>
    </Switch>

    <h2>Anonymous Layout Footer</h2> 
</div>;

export default AnonymousLayout;