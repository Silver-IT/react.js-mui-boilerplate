import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { LoginPage, RegisterPage } from "../../pages/auth";

const AuthLayout = ({ match }) =>
<div>
    <h2>Auth Layout Header</h2> 
    
    <Switch>
        <Route exact path={`${match.path}login`} component={LoginPage} />
        <Route exact path={`${match.path}register`} component={RegisterPage} />

        <Route path="">
            <Redirect to="/404" />
        </Route>
    </Switch>

    <h2>Auth Layout Footer</h2> 
</div>;

export default AuthLayout;