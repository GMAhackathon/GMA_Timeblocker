import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Modal, Button } from 'antd';
import './Calendar.css';
import axiosWithAuth from '../../authentication/axiosWithAuth';

function CalendarPage({ reload }) {
  const [dateRange, setDateRange] = useState([]);

  useEffect(() => {
    let now = moment();
    var current_time = new moment().format("HH:mm");
    let bool = current_time > "15:00";
    let start = undefined;
    if (bool === false) {
      start = now;
    } else {
      start = moment(now).add(1, 'days');
    }
    let end = moment(start).add(13, 'days');
    let arr = getDates(start, end);
    setDateRange(arr)

    axiosWithAuth()
    .get('https://gma-scheduler.herokuapp.com/api/calendar')
    .then(res => {
        console.log('CALENDAR', res)

    })
    .catch(err => {
        console.log(err)
    })

  }, [])

  const getDates = (startDate, stopDate) => {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
  
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', fontSize: '28px', fontWeight: '600', paddingTop: '20px'}}>Schedule a visit</div>
      <div style={{display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
           margin: '10px', marginTop: '40px'}}>
        {dateRange.map(item => {
          return <Card item={item} day={moment(item).format('dddd')} reload={reload} key={item}/>
        })}
      </div>
    </div>
  )
}




function Card({ item, day, reload }) {
  const id = localStorage.getItem('id')
  const [modal, setModal] = useState(false);
  const [familySize, setFamilySize] = useState({size: ''});
  const [successMessage, setSuccessMessage] = useState(false);
  const [failureMessage, setFailureMessage] = useState(false);

  const handleClick = () => {
    // alert('Click')
    setModal(true)
  }

  const handleConfirm = () => {
    console.log(familySize)
    //api/calendar/appointments
    let newAppointment = {users_id: id, date: item, meals: familySize.size};
    console.log('APPT', newAppointment)
    axiosWithAuth()
    .post('https://gma-scheduler.herokuapp.com/api/calendar/appointments', newAppointment)
    .then(res => {
        console.log(res)
        // props.history.push('/dashboard') 

        axiosWithAuth()
        .get(`https://gma-scheduler.herokuapp.com/api/users/${id}`)
        .then(res => {
            // console.log('USER', res.data.appointment.pop())
            if (res.data.appointment.length > 0) {
              localStorage.setItem('current', JSON.stringify(res.data.appointment.pop()))
            } else {
              localStorage.setItem('current', JSON.stringify({date: ''}))
            }
            // localStorage.setItem('current', "")
            console.log('USER PARSE', JSON.parse(localStorage.getItem('current')))
            // props.history.push('/dashboard') 
            setSuccessMessage(true)
            // localStorage.setItem('current', item)
            setTimeout(() => {
              handleCancel(); 
              reload(true);
            }, 2000) 

        })
        .catch(err => {
            console.log(err)
        })

        // setSuccessMessage(true)
        // // localStorage.setItem('current', item)
        // setTimeout(() => {
        //   handleCancel(); 
        //   reload(true);
        // }, 2000) 
                    
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

  const handleChange = (e) => {
    setFamilySize({ ...familySize, [event.target.name]: event.target.value })
  }

  return (
    <div style={{height: '150px', border: '1px solid #89878a', 
                //  backgroundColor: `${day !== 'Suturday' && day !== 'Sunday' ?  'transparent' : '#bdbbbb'}`,
                padding: '5px', display: 'flex', flexDirection: 'column',
                }}>
      <div style={{fontSize: '16px', fontWeight: '500'}}>{moment(item).format('dddd')}</div>
      <div>{item}</div>
      <div style={{marginTop: '10px'}}>Time: 3pm - 6pm</div>
      <button onClick={handleClick} style={{visibility: `${day !== 'Saturday' && day !== 'Sunday' ? 'visible' : 'hidden'}`,
                                            marginTop: '25px'}}>Select</button>
      {modal ? (
              <Modal
                title="Selected Date"
                visible={modal}
                onOk={handleConfirm}
                onCancel={handleCancel}
                okText="Confirm"
              >
                <p>{moment(item).format('dddd')}</p>
                <p>{item}</p>
                <p>How many family members are attending? 
                  <input 
                    type="text"
                    name="size"
                    value={familySize.size}
                    placeholder="" 
                    onChange={handleChange}
                    style={{marginLeft: '10px', width: '50px'}}
                    />
                </p>
                <p style={{display: `${successMessage ? 'block' : 'none'}`, color: 'green'}}>You reservation has been added</p>
                <p style={{display: `${failureMessage ? 'block' : 'none'}`, color: 'red'}}>Something went wrong. Try again.</p>
              </Modal>
      ) : null}
    </div>
  )
}

export default CalendarPage;