import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Modal, Button } from 'antd';
import axiosWithAuth from '../../authentication/axiosWithAuth';
import Display from './Display';

function ReservationPage() {
  const current = JSON.parse(localStorage.getItem('current'));
  console.log('DATE', current)
  const [modal, setModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [failureMessage, setFailureMessage] = useState(false);

  useEffect(() => {
    console.log('RES CURRENT', current)
  }, [])

  const handleClick = () => {
    // alert('Click')
    setModal(true)
  }

  const handleConfirm = () => {
    //api/calendar/appointments/1
    axiosWithAuth()
    .delete(`https://gma-scheduler.herokuapp.com/api/calendar/appointments/${current.id}`)
    .then(res => {
        console.log(res)
        setSuccessMessage(true)
        localStorage.setItem('current', JSON.stringify({date: ''}))
        setTimeout(() => {
          handleCancel(); 
        }, 2000) 
                    
    })
    .catch(err => {
        console.log(err)
        setFailureMessage(true)
        setTimeout(() => {
          handleCancel(); 
        }, 2000) 
    })

  }

  const handleCancel = () => {
    setModal(false)
  }

  {if (current.date.length === 0) {
    return <Display />
  } else {

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{fontSize: '28px', fontWeight: '600', marginTop: '20px'}}>You have a reservation</div>
      <div style={{fontSize: '18px', fontWeight: '700', marginTop: '20px'}}>
           Date: {moment(current.date).utc().format('dddd')} - {moment(current.date).utc().format('YYYY-MM-DD')}  (3-6 PM)
      </div>
      <button onClick={handleClick} style={{marginTop: '20px'}}>CANCEL</button>
      {modal ? (
              <Modal
                title="Confirm Cancel"
                visible={modal}
                onOk={handleConfirm}
                onCancel={handleCancel}
                okText="Yes, Cancel"
              >
                <p>Are you sure you want to cancel the appointment?</p>
                <p style={{display: `${successMessage ? 'block' : 'none'}`, color: 'green'}}>You reservation has been canceled</p>
                <p style={{display: `${failureMessage ? 'block' : 'none'}`, color: 'red'}}>Something went wrong. Try again.</p>
              </Modal>
      ) : null}
    </div>
  )
}}

}

export default ReservationPage;