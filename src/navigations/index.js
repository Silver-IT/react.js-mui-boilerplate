import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Layouts
import { AuthLayout, AnonymousLayout, AdminLayout, CustomerLayout } from "../layouts";

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

export default AppNavigation;
