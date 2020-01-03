import React from 'react';
import CalendarPage from './CalendarPage';
import ReservationPage from './ReservationPage';


function Display( ) {
  //if current date valid, display reservation page
  // if not, display calendar page

  return (
    <div>
      <CalendarPage />
      {/* <ReservationPage /> */}
    </div>
  )

}

export default Display;