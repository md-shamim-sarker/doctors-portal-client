import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-blue-100">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li>Link 1</li>
                        <li>Link 1</li>
                        <li>Link 1</li>
                        <li>Link 1</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;