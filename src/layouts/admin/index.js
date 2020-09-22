import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { AdminDashboardPage } from "../../pages/admin";

const AdminLayout = ({ match }) => {
    const isAuthenticated = useSelector(state => !!state.auth.user);

    if (!isAuthenticated) {
        return <Redirect to="/auth/login" />
    }

    return (
        <div>
            <h2>Admin Layout Header</h2> 
        
            <Switch>
                <Route exact path={`${match.path}dashboard`} component={AdminDashboardPage} />
        
                <Route path="">
                    <Redirect to="/404" />
                </Route>
            </Switch>
            
            <h2>Admin Layout Footer</h2> 
        </div>);
}


export default AdminLayout;