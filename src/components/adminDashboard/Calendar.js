import React, { useEffect, useState } from 'react';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import axiosWithAuth from '../../authentication/axiosWithAuth';
import { calendarTableColumns } from './data';

function Calendar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get('https://gma-scheduler.herokuapp.com/api/calendar/')
    .then(res => {
        console.log('CALENDAR DATA', res)
        let data = res.data;
        setData(data.sort((a,b) => { 
          return b.id - a.id }
        ))

    })
    .catch(err => {
        console.log(err)
    })
  }, [])

  return (
    <div style={{marginTop: '20px'}}>
      <Table
      className="rowHover"
      dataSource={data} 
      columns={calendarTableColumns} 
      pagination={{ pageSize: 15 }} 
      rowKey='id'
      onRow={(record, rowIndex) => {
        return {
          onClick: event => {
          }
        };
      }}
    />
   </div>
  )
}

export default Calendar;