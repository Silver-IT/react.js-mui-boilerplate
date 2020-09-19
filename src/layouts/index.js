import React from 'react';
import { Route } from 'react-router-dom';

export { default as AdminLayout } from './admin';
export { default as AnonymousLayout } from './anonymous';
export { default as CustomerLayout } from './customer';

const LayoutWrapper = ({
    component: Component,
    layout: Layout,
    ...props
}) => {
    return (
        <Route {...props} render={props => 
            <Layout {...props}>
                <Component {...props}/>
            </Layout>
        } />
    );
};

export { LayoutWrapper };
