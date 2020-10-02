import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Box, Typography, NativeSelect } from "@material-ui/core";

import { LandingPage, AboutUsPage } from "../../pages/anonymous";
import { Error404Page, Error500Page } from "../../pages/errors";
// import useStyles from "./style";


const AnonymousLayout = ({ match, theme }) => {
    const [lang, setLang] = useState('en');

    // const classes = useStyles(theme);

    return <Box className="bg-default">
        {/* Place Header Component */}
        <Box display="flex" justifyContent="center" className="bg-header-default">
            <Box display="flex" justifyContent="space-between" width={1} className="container">
                <Typography variant="h3">Sportsbet Logo</Typography>
                <NativeSelect classes={{ root: "dark" }} variant="standard" value={lang} onChange={event => setLang(event.target.value)}>
                    <option value="en">English</option>
                    <option value="zh">中文</option>
                    <option value="es">Español</option>
                    <option value="ja">日本語</option>
                    <option value="pt">Português</option>
                    <option value="tr">Türkçe</option>
                    <option value="th">ภาษาไทย</option>
                    <option value="de">Deutsch</option>
                    <option value="vi">Tiếng Việt</option>
                </NativeSelect>
            </Box>
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
        {/* Place Footer Component */}
    </Box>;
};

export default AnonymousLayout;