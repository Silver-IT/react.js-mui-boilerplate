import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// Layouts
import { LayoutWrapper, AnonymousLayout, AdminLayout, CustomerLayout } from '../layouts';

// Admin Pages
import { AdminDashboardPage } from '../pages/admin';

// Customer Pages
import { CustomerHomePage, CustomerProfilePage }  from '../pages/customer';

// Anonymous Pages
import { LandingPage, AboutUsPage } from '../pages/anonymous';

// Auth Pages
import { LoginPage, RegisterPage } from '../pages/auth';

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutWrapper exact path='/' component={LandingPage} layout={AnonymousLayout}/>
        <LayoutWrapper exact path='/about-us' component={AboutUsPage} layout={AnonymousLayout}/>

        <LayoutWrapper exact path='/auth/login' component={LoginPage} layout={AnonymousLayout}/>
        <LayoutWrapper exact path='/auth/register' component={RegisterPage} layout={AnonymousLayout}/>

        <LayoutWrapper exact path='/admin/dashboard' component={AdminDashboardPage} layout={AdminLayout}/>

        <LayoutWrapper exact path='/customer/home' component={CustomerHomePage} layout={CustomerLayout}/>
        <LayoutWrapper exact path='/customer/profile' component={CustomerProfilePage} layout={CustomerLayout}/>
        
        <Route exact path=''>
          <Redirect to='/' />
        </Route>  
      </Switch>
    </BrowserRouter>
  );
}

export default AppNavigation;
