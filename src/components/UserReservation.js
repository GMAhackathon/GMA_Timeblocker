import React from "react";

const UserReservation = (props) => {

useEffect(() => {
    AxiosWithAuth()
    .delete(calendar/appointments/{props.id})
    .then(res => {})
    .catch(err = console.log(err));
})
  return <div>
      <h1>{props}</h1>
      <h2>3:00 PM -  6:00 PM</h2>
      <h2>3 family members</h2>
      <div>
        <button onClick={ handleDelete }></button>
      </div>
      Inside Reservation Component
      </div>;
};

export default UserReservation;
