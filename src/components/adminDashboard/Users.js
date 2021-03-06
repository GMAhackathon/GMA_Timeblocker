import React, {useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
import { usersTableColumns } from './data';
import UserRegistrationForm from './UserRegistrationForm';
import styled from 'styled-components';
import axiosWithAuth from '../../authentication/axiosWithAuth';
import { Modal, Button } from 'antd';

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
  const [form, setForm] = useState(false);
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState('none');

  const [modal, setModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [failureMessage, setFailureMessage] = useState(false);
  const [user, setUser] = useState();
  const [reload, setReload] = useState(false);


    
  useEffect(() => {

    axiosWithAuth()
    .get('https://gma-scheduler.herokuapp.com/api/users')
    .then(res => {
        let data = res.data;
        setUsers(data.sort((a,b) => { 
          return b.id - a.id }
        ))

    })
    .catch(err => {
        console.log(err)
    })

  }, [reload])

  const handleCancelButtonOnForm = () => {
    setForm(false);
  }

  const handleAddButton = () => {
    setForm(!form);
  }

  const displaySuccessMessageTimeout = () => {
    setDisplaySuccessMessage('flex');
    setTimeout(() => {
      setDisplaySuccessMessage('none');
    }, 3000)
    
  }

  const handleRowClick = (user) => {
    setModal(true);
    setUser(user);
  }
    
  const handleCancel = () => {
    setModal(false)
  }

  const handleDeleteUser = () => {
    axiosWithAuth()
    .delete(`https://gma-scheduler.herokuapp.com/api/users/${user.id}`)
    .then(res => {
        setModal(false);
        setReload(true);
    })
    .catch(err => {
        console.log(err)
    })
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
            <UserRegistrationForm setReload={setReload} setForm={setForm} handleCancelButtonOnForm={handleCancelButtonOnForm}/>
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
                  handleRowClick(record)
                }
              };
            }}
          />
          {modal ? (
              <Modal
                title="User Actions"
                visible={modal}
                onOk={handleDeleteUser}
                onCancel={handleCancel}
                okText="Delete User"
              >
                <p>User ID: {user.id}</p>
                <p>User Name: {user.firstName}</p>
                <p style={{fontSize: '16px', fontWeight: '600'}}>Delete User?</p>
                <p style={{display: `${successMessage ? 'block' : 'none'}`, color: 'green'}}>User has been deleted</p>
                <p style={{display: `${failureMessage ? 'block' : 'none'}`, color: 'red'}}>Something went wrong. Try again.</p>
              </Modal>
      ) : null}
          {/* )} */}
      </div>
  )
    
  
}

export default Users;