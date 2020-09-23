import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";

import { LOGOUT_REQUEST } from "../../common/redux/actions/types";
import { AdminDashboardPage } from "../../pages/admin";

const AdminLayout = ({ match }) => {
    const isAuthenticated = useSelector(state => !!state.auth.user);
    const dispatch = useDispatch();
    const logout = useCallback(() => 
        dispatch({ type: LOGOUT_REQUEST }),
        [dispatch]
    );

    if (!isAuthenticated) {
        return <Redirect to="/auth/login" />
    }

    return (
        <div>
            <h2>Admin Layout Header</h2>

            <Button variant="contained" color="secondary" onClick={logout}>
                Log out
            </Button>
        
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