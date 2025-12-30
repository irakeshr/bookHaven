import React from 'react';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import { Outlet } from 'react-router-dom';
import UserHeader from '../user/components/UserHeader';

const FrontPage = () => {
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

export default FrontPage;
