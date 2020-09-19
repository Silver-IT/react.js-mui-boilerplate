import React from 'react';

const AdminLayout = ({ children }) =>
<div>
    <h2>Admin Layout Header</h2> 
    { children }
    <h2>Admin Layout Footer</h2> 
</div>;

export default AdminLayout;