import React, { useState, useEffect } from "react";
import AccountSettingsPanel from "./AccountSettingsPanel";
import UserPanel from "./UserPanel";
import Header from "./Header";
import UserReservation from "./UserReservation";
import axiosWithAuth from "../../authentication/axiosWithAuth";
import CalendarPage from "./CalendarPage";

const RESERVATIONDISPLAY = "RESERVATIONDISPLAY";
const NORESERVATIONDISPLAY = "NORESERVATIONDISPLAY";
const RESERVATIONEDIT = "RESERVATIONEDIT";
const NORESERVATIONEDIT = "NORESERVATIONEDIT";

const UserDashboard = props => {
  const [user, setUser] = useState(props);
  const [displayOptions, setDisplayOptions] = useState({
    editingAccount: false,
    hasReservation: false
  });

  let options = RESERVATIONDISPLAY;

  if (!displayOptions.editingAccount && !displayOptions.hasReservation) {
    options = NORESERVATIONDISPLAY;
  } else if (displayOptions.editingAccount && displayOptions.hasReservation) {
    options = RESERVATIONEDIT;
  } else {
    options = NORESERVATIONEDIT;
  }

  // Api Call to logged in User
  useEffect(() => {
    const id = localStorage.getItem("id");
    console.log("nl: UserID: ", id);
    axiosWithAuth()
      .get(`https://gma-scheduler.herokuapp.com/api/users/${id}`)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err.message));
  }, []);

  console.log(user);

  switch (options) {
    case RESERVATIONDISPLAY:
      return (
        <div>
          <Header />
          User has reservation and in UserPanel
          <UserPanel />
          <UserReservation />
        </div>
      );

    case RESERVATIONEDIT:
      return (
        <div>
          <Header />
          User has reservation and in AccountSettingsPanel
          <AccountSettingsPanel />
          <UserReservation />
        </div>
      );

    case NORESERVATIONEDIT:
      return (
        <div>
          <Header />
          User does not have reservation and in AccountSettingsPanel
          <AccountSettingsPanel />
          <CalendarPage />
        </div>
      );

    default:
      // NORESERVATIONDISPLAY
      return (
        <div>
          <Header />
          User does not have reservation and in UserPanel
          <UserPanel />
          <CalendarPage />
        </div>
      );
  }

  // Check if reservation exists
  // If Exists, show reservation
  // If !Exists call Calendar Appointment
  // if (user.hasReservation) {
  //   render(<div>You have a reservation</div>);
  // } else {
  //   return (
  //     <div>
  //       <CalendarCard />
  //     </div>
  //   );
  // }

  // return (

  //   <div className='user-display-panel'>
  //   if({user.hasReservation}) {
  //     <div>Reservation goes here</div>;
  //     else {
  //       <CalendarCard />
  //     }
  //   }

  //   </div>
  // );
};

export default UserDashboard;
