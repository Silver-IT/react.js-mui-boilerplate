import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { LoginPage, RegisterPage } from "../../pages/auth";

const AuthLayout = ({ match }) => {
    const isAuthenticated = useSelector(state => !!state.auth.user);
    const role = useSelector(state => state.auth.user ? state.auth.user.role : null);

    if (isAuthenticated) {
        if (role === "ADMIN") {
            return <Redirect to="/admin/dashboard" />
        } else if (role === "CUSTOMER") {
            return <Redirect to="/customer/home" />
        }
    }

    return (
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
        </div>
        );
}


export default AuthLayout;