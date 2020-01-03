import React from 'react';
import AdminDashboard from './adminDashboard/index';
import UserDashboard from './userDashboard/index';


function Index() {
//based on user type, render either admin dashboard or user dashboard
const value = localStorage.getItem('admin');

  {if (value === 'true') {
    return (
      <AdminDashboard />
    )
  } else {
    console.log('debug', value)
    return (
      <UserDashboard />
    )
  }}

}

export default Index;