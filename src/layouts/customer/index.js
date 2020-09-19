import React from 'react';

const CustomerLayout = ({ children }) =>
<div>
    <h2>Customer Layout Header</h2> 
    { children }
    <h2>Customer Layout Footer</h2> 
</div>;

export default CustomerLayout;