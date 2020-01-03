import React, { useState } from 'react';
import axiosWithAuth from './axiosWithAuth';
import { Link } from 'react-router-dom';

// import { Form } from 'semantic-ui-react';

export default function Login(props)  {
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const changeHandler = e => {
        setState({
            ...state, 
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = (e, state) => {
        e.preventDefault()
        console.log(state)
        axiosWithAuth()
            .post('https://gma-scheduler.herokuapp.com/api/auth/login', state)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)

                localStorage.setItem('message', res.data.message)
                localStorage.setItem('id', res.data.id)
                localStorage.setItem('admin', res.data.admin)
                let id = localStorage.getItem('id')
                axiosWithAuth()
                  .get(`https://gma-scheduler.herokuapp.com/api/users/${id}`)
                  .then(res => {
                      console.log('USER', res.data.user[0].current)
                      localStorage.setItem('current', res.data.user[0].current)
                      props.history.push('/dashboard') 

                  })
                  .catch(err => {
                      console.log(err)
                  })
                               
            })
            .catch(err => {
                console.log(err)
            })
        setState({           
            email: '',
            password: ''
        })
    }

        return (
            <div className='wrapper'>
                <div className="signup-text">
                    <h1>Sign in to your account</h1>
                </div>
                <form onSubmit={(e) => submitHandler(e, state)}>
                    <div>
                        <label style={{textAlign:'left'}}>Email</label>           
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter Email"
                            value={state.email}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label style={{textAlign:'left'}}>Password</label>  
                        <input 
                            type="password" 
                            name="password" 
                            value={state.password}
                            onChange={changeHandler} 
                            placeholder="Enter Password"
                            required
                        />
                    </div>
                    <button className="signup-btn"
                    style={(state.email && state.password)? {backgroundColor: "#0D5814"}:{backgroundColor: "#85a688"}}>
                    Submit</button>
                </form>
            </div>
        )
    }