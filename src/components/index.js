import React from 'react';
import AdminDashboard from './adminDashboard/index';
import UserDashboard from './userDashboard/index';


function Index() {
//based on user type, render either admin dashboard or user dashboard
  return (
    <UserDashboard />
    // <AdminDashboard />
  )
}

export default Index;