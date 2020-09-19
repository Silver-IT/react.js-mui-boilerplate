import React from 'react';

const AnonymousLayout = ({ children }) =>
<div>
    <h2>Anonymous Layout Header</h2> 
    { children }
    <h2>Anonymous Layout Footer</h2> 
</div>;

export default AnonymousLayout;