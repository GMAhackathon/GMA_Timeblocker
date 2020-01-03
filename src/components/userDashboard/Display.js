import React from 'react';
import CalendarPage from './CalendarPage';
import ReservationPage from './ReservationPage';


function Display({ user }) {
  //if current date valid, display reservation page
  // if not, display calendar page
  console.log('USER display', user)
  return (
    <div>
      <CalendarPage />
      {/* <ReservationPage /> */}
    </div>
  )

}

export default Display;