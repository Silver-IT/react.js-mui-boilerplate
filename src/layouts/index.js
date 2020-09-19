import React from 'react';
import { Route } from 'react-router-dom';

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

export default LayoutWrapper;
