import React from 'react';
import { Outlet } from 'react-router-dom';

const Other = () => {
    return (
        <div>
           <Outlet></Outlet>
        </div>
    );
};

export default Other;