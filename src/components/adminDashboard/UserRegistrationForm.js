import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../../authentication/axiosWithAuth';

const FormWrap = styled.form`
  // background: #EDEEEF;
  border: 0px transparant;
  border-radius: 3px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  transition: all 200ms ease;
`;

const Input = styled.input`
  outline: none;
  border-radius: 3px;
  border: 1px solid transparent;
  background: white;
  width: 100%;
  height: 26px;
`;

const Button = styled.button`
  width: 120px;
  height: 25px;
  border-radius: 3px;
  margin: 10px 5px 10px 10px;
  background: #50a76d;
  text-align: center;
  color: white;
  outline: none;
  cursor: pointer;
`;

const AddChildButton = styled.button`
  display: flex;
  width: 75px;
  height: 25px;
  border-radius: 3px;
  margin: 5px 5px 0px 0px;
  background: #50a76d;
  text-align: center;
  color: white;
  outline: none;
  cursor: pointer;
`;

const ChildrenContainer = styled.div`
  text-align: center;
  font-weight: bold;
`;


function UserRegistrationForm({setReload, setForm, handleCancelButtonOnForm}) {
  const [user, setUser] = useState({firstName: '', lastName: '', email: '', familySize: '', password: '',
                                   });
  

  useEffect(() => {

  }, [])

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axiosWithAuth()
    .post('https://gma-scheduler.herokuapp.com/api/auth/register', user)
    .then(res => {
        console.log('NEW USER', res);
        setReload(true);
        setForm(false);

    })
    .catch(err => {
        console.log(err)
    })

  }

  function handleCancel(event) {
    event.preventDefault();
    handleCancelButtonOnForm();
  }


      return (
        <FormWrap onSubmit={handleSubmit} style={{margin: '30px 10px 20px 10px'}}>
          <fieldset style={{border: '1px solid transparent', margin: '10px 5px 0px 5px',  background: '#d8dee0'}}>
            <div style={{display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr',
                         gridGap: '10px', margin: '10px', marginBottom: '15px'}}>
              <div >
                <label>First Name</label>
                <div>
                  <Input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange} />
                </div>
              </div>
              <div>
                <label>Last Name</label>
                <div>
                  <Input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange} />
                </div>
              </div>
              <div >
                <label>Email</label>
                <div>
                  <Input 
                    style={{width: '100%'}}
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange} />
                </div>
              </div>
              <div>
                <label>Family Size</label>
                <div>
                  <Input 
                    style={{width: '100%'}}
                    type="text"
                    name="familySize"
                    value={user.familySize}
                    onChange={handleChange} />
                </div>
              </div>
              <div>
                <label>Password</label>
                <div>
                  <Input 
                    style={{width: '100%'}}
                    type="text"
                    name="password"
                    value={user.password}
                    onChange={handleChange} />
                </div>
              </div>
            </div>
          </fieldset>
          <div style={{alignSelf: 'flex-end'}}>
            <Button onClick={handleCancel} style={{background: '#C73642', width: '80px'}}>
              Cancel
            </Button>
            <Button type="submit">
              Add user
            </Button>

          </div>
    </FormWrap>
  );
}

export default UserRegistrationForm;
