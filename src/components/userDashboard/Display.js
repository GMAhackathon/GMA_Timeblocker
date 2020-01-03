import React, { useEffect, useState } from 'react';
import CalendarPage from './CalendarPage';
import ReservationPage from './ReservationPage';
import moment from 'moment';


function Display() {
  //if current date valid, display reservation page
  // if not, display calendar page
  let current = JSON.parse(localStorage.getItem('current'));
  const [reload, setReload] = useState(false);
  const now = moment();
  // console.log('Compare', moment(current) < now)

  useEffect(() => {
    console.log('RELOAD EFFECT', current)
    current = JSON.parse(localStorage.getItem('current'))
  }, [current])
  

  {if (current.date.length === 0 || moment(current.date) < now) {
    return <CalendarPage reload={setReload}/>
  } else {
    return <ReservationPage reload={setReload}/>
  }}

}

export default Display;