import React, {useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
import { usersTableColumns } from './data';
import UserRegistrationForm from './UserRegistrationForm';
import styled from 'styled-components';
import axiosWithAuth from '../../authentication/axiosWithAuth';

const RowAbove =  styled.div`
display: flex;
justify-content: flex-end;
margin: 30px 15px 35px 15px;
font-size: 18px;
`
const CreateNewEntry = styled.div`
display: flex;
align-items: center;
margin-right: 10px;
`

const Users = props => {
  const [users, setUsers] =  useState([]);
  const [search, setSearch] = useState(''); //TODO: add search functionality and display the search result array
  const [form, setForm] = useState(false);
  const [studentId, setStudentId] = useState(undefined);
  const [newRecord, setNewRecord] = useState(false); //this component refreshes when the new record is added so that the new student apprears in the student list
  const [savePrevState, setSavePrevState] = useState(newRecord); //usefull when another student record needs to be added right after the first one
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState('none');

    
  useEffect(() => {
    //get users data, set to state
    // setUsers = axios.get('/users')

    axiosWithAuth()
    .get('https://gma-scheduler.herokuapp.com/api/users')
    .then(res => {
        console.log('USERS DATA', res)
        let data = res.data;
        setUsers(data.sort((a,b) => { 
          return b.id - a.id }
        ))

    })
    .catch(err => {
        console.log(err)
    })

  }, [])

  const handleCancelButtonOnForm = () => {
    setForm(false);
  }

  const handleAddButton = () => {
    setForm(!form);
    // props.resetSuccessMessage(); //useful when another record needs to be added right after the first one
  }

  const displaySuccessMessageTimeout = () => {
    setDisplaySuccessMessage('flex');
    setTimeout(() => {
      setDisplaySuccessMessage('none');
    }, 3000)
    
  }
    


  return (
      <div>
          <RowAbove>
            <CreateNewEntry>
              <div style={{display: 'flex', marginRight: '10px', alignItems: 'center', display: `${displaySuccessMessage}`}}>
                <div style={{marginRight: '10px', color: '#0FDF0B', fontSize: '12px'}}>Student has been successfully added</div>
                <div><FontAwesomeIcon style={{width: '12px', cursor: 'pointer', color: '#0FDF0B'}} icon={faCheck} size='lg'/></div>
              </div>
              <div style={{display: 'flex'}}>
                <div style={{marginRight: '10px', color: '#50a76d'}}>Add User</div>
                <div><FontAwesomeIcon onClick={handleAddButton} style={{width: '25px', height: '25px', cursor: 'pointer', color: '#50a76d'}} icon={faPlusCircle} size='lg'/></div>
              </div>
            </CreateNewEntry>
          </RowAbove>

          {form ? (
            <UserRegistrationForm handleCancelButtonOnForm={handleCancelButtonOnForm} setNewRecord={setNewRecord} 
                                      newRecord={newRecord} displaySuccessMessageTimeout={displaySuccessMessageTimeout}
                                      setSavePrevState={setSavePrevState}/>
          ) : null}
          
          
          {/* {users.length === 0 ? (
            <Spin style={{marginTop: '20px'}}size="large" />
          ) : ( */}
          <Table
            className="rowHover"
            dataSource={users} 
            columns={usersTableColumns} 
            pagination={{ pageSize: 15 }} 
            rowKey='id'
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  // setStudentId(record.id)
                  // props.getStudentById(record.id)
                }
              };
            }}
          />
          {/* )} */}
      </div>
  )
    
  
}

export default Users;