import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from '../components/UserHeader';

const UserLayout = () => {
    return (
<div className="min-h-screen overflow-x-hidden">
  {/* Header */}
  <UserHeader />

  {/* Page Content */}
  <div>
    <Outlet />
  </div>
</div>



    );
}

export default UserLayout;
