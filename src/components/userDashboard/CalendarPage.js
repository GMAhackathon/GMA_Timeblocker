import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Modal, Button } from 'antd';
import './Calendar.css'

function CalendarPage() {
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
          return <Card item={item} day={moment(item).format('dddd')}key={item}/>
        })}
      </div>
    </div>
  )
}




function Card({ item, day }) {
const [modal, setModal] = useState(false);
const [familySize, setFamilySize] = useState({size: ''})

const handleClick = () => {
  // alert('Click')
  setModal(true)
}

const handleConfirm = () => {
console.log(familySize)
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
            </Modal>
    ) : null}
  </div>
)
}

export default CalendarPage;