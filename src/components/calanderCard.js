import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import Modal from "./Modal";

const CalendarCard = props => {
  const [calendar, setCalendar] = useState({});
  const [user, setUser] = useState(props);
  const [showModal, setShowModal] = useState(false);

  // API call for display of calendar here
  useEffect(() => {
    // API Call for calendar endpoint
  });

  handleSubmit = e => {
    // Final Check for reservation before confirmation
    // If somebody has taken the reservation, display Sorry Modal
    // Else display Reservation Set Modal (Same modal just different info)
    // Update calendar
    useEffect(() => {});

    // Update user state
    useEffect(() => {});
  };
  // If they  have selected a reservation, pull up a Modal with # of family members and a confirm button
  // Then update user state
  toggleModal = () => setShowModal(!showModal);
  myfunc = () => {
    /*Put confirm code here */
  };

  return (
    <div>
      Inside Calendar Display
      {showModal ? (
        <Modal>
          <div>
            <h1>My confirmation page here, need dropdown form?</h1>
            <div>
              <button onClick={myfunc}>Confirm</button>
              <button onClick={toggleModal}>Cancel</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default CalendarCard;
