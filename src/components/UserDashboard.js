import React, { useState, useEffect } from "react";
import CalendarCard from "./CalanderCard";

const UserDashboard = props => {
  const [user, setUser] = useState(props);

  useEffect(() => {
    // Api Call to logged in User
  });

  // Check if reservation exists
  // If Exists, show reservation
  // If !Exists call Calendar Appointment
  if (user.hasReservation) {
    render(<div>You have a reservation</div>);
  } else {
    return (
      <div>
        <CalendarCard />
      </div>
    );
  }
};

export default UserDashBoard;
