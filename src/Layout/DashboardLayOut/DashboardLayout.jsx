/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DashobardMenu from '../../Dashboard/Header/DashobardMenu';
import { Outlet } from 'react-router-dom';
import '../../Dashboard/Dashboard.css'

const DashboardLayout = () => {
    const [width, setWidth] = useState(85);
    return (
        <div>
            <DashobardMenu width={width} setWidth={setWidth}></DashobardMenu>
            <Outlet context={[width, setWidth]}></Outlet>
        </div>
    );
};

export default DashboardLayout;