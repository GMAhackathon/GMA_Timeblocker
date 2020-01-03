import React from 'react';
import Calendar from './Calendar';
import Users from './Users';


function Display({ navigation }) {

  {if (navigation === 'Calendar') {
    return (
      <Calendar />
    )
  } else if (navigation === 'Users') {
    return (
      <Users />
    )

  } 
 }
}

export default Display;