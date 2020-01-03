import React, { useEffect, useState } from 'react';
import CalendarPage from './CalendarPage';
import ReservationPage from './ReservationPage';
import moment from 'moment';


function Display() {
  //if current date valid, display reservation page
  // if not, display calendar page
  const current = localStorage.getItem('current');
  const [reload, setReload] = useState(false);
  const now = moment();
  console.log('Compare', moment(current) < now)

  useEffect(() => {
    console.log('RELOAD EFFECT', current)
  }, [reload])
  

  {if (current.length === 0 || moment(current) < now) {
    return <CalendarPage reload={setReload}/>
  } else {
    return <ReservationPage />
  }}

}

export default Display;