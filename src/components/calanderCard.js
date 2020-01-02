import React, { useState, useEffect } from "react";

const CalendarCard = props => {
  const [calendar, setCalendar] = useState({});
  const [user, setUser] = useState(props);

  // API call for display of calendar here
  useEffect(() => {
    // API Call for firebase calendar endpoint
    firebase.database().ref("calendar endpoint path");
  });

  handleSubmit = e => {
    // Final Check for reservation before confirmation
    // If somebody has taken the reservation, display Sorry Modal
    // Else display Reservation Set Modal (Same modal just different info)
    // Update calendar
    useEffect(() => {
      firebase
        .database()
        .ref("calendar endpoint path for checking reservation");
    });

    // Update user state
    useEffect(() => {
      firebase.database().ref("Update user with reservation");
    });
  };
  // If they  have selected a reservation, pull up a Modal with # of family members and a confirm button
  // Then update user state

  return <div>Inside Calendar Display</div>;
};

export default CalendarCard;
