import React, { useEffect, useState } from 'react';
import CalendarPage from './CalendarPage';
import ReservationPage from './ReservationPage';


function Display() {
  //if current date valid, display reservation page
  // if not, display calendar page
  const current = localStorage.getItem('current');
  

  {if (current.length > 0) {
    return <ReservationPage />
  } else {
    return <CalendarPage />
  }}

}

export default Display;