import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Box, Button } from "@material-ui/core";

import { LandingPage, AboutUsPage } from "../../pages/anonymous";
import { Error404Page, Error500Page } from "../../pages/errors";

import { useGlobalStyles } from "../../common/themes/styles";
import useStyles from "./style";


const AnonymousLayout = ({ match, theme }) => {

    const classes = useStyles(theme);
    const globalClasses = useGlobalStyles(theme);

    return <Box>
        <Box>
            <h2>Anonymous Layout Header</h2>
            <Button className={globalClasses.customized}>
                Customized Button
            </Button>
        </Box>

        <Switch>
            <Route exact path={`${match.path}`} component={LandingPage} />
            <Route exact path={`${match.path}about-us`} component={AboutUsPage} />

            <Route exact path="/404" component={Error404Page} />
            <Route exact path="/500" component={Error500Page} />

            <Route path="">
                <Redirect to="/404" />
            </Route>
        </Switch>

        <h2>Anonymous Layout Footer</h2> 
    </Box>;
};

export default AnonymousLayout;