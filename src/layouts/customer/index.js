import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";

import { LOGOUT_REQUEST } from "../../common/redux/actions/types";
import { CustomerHomePage, CustomerProfilePage } from "../../pages/customer";

const CustomerLayout = ({ match }) => {
    const isAuthenticated = useSelector(state => !!state.auth.user);
    const dispatch = useDispatch();
    const logout = useCallback(() => 
        dispatch({ type: LOGOUT_REQUEST }),
        [dispatch]
    );

    if (!isAuthenticated) {
        return <Redirect to="/auth/login" />
    }
    
    return <div>
        <h2>Customer Layout Header</h2>

        <Button variant="contained" color="secondary" onClick={logout}>
            Log out
        </Button>
        
        <Switch>
            <Route exact path={`${match.path}home`} component={CustomerHomePage} />
            <Route exact path={`${match.path}profile`} component={CustomerProfilePage} />

            <Route path="">
                <Redirect to="/404" />
            </Route>
        </Switch>
        
        <h2>Customer Layout Footer</h2> 
    </div>
};

export default CustomerLayout;