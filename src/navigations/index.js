import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// Layouts
import LayoutWrapper from '../layouts';
import AnonymousLayout from '../layouts/anonymous';
import AdminLayout from '../layouts/anonymous';
import CustomerLayout from '../layouts/customer';

// Admin Pages
import AdminDashboardPage from '../pages/admin/dashboard';

// Customer Pages
import CustomerHomePage  from '../pages/customer/home';
import CustomerProfilePage from '../pages/customer/profile';

// Anonymous Pages
import LandingPage from '../pages/anonymous/landing';

// Auth Pages
import LoginPage from '../pages/auth/login';
import RegisterPage from '../pages/auth/register';

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutWrapper exact path='/' component={LandingPage} layout={AnonymousLayout}/>

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
