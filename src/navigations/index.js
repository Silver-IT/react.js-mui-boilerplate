import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core";

// Layouts
import { AuthLayout, AnonymousLayout, AdminLayout, CustomerLayout } from "../layouts";

// Global Classes
import { useGlobalStyles } from "../common/themes/styles";

const AppNavigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth/" component={AuthLayout}/>
        <Route path="/customer/" component={CustomerLayout}/>
        <Route path="/admin/" component={AdminLayout}/>
        <Route path="/" component={AnonymousLayout}/>
      </Switch>
    </Router>
  );
}

export default withStyles(theme => useGlobalStyles(theme), { withTheme: true })(AppNavigation);
