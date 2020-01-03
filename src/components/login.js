import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Login = (props) => {

    const [credentials, setCredentials] = useState({

        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials, 
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            // props.history.push('/dashboard') //or whatever endpoint user dashboard is
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <StyledDiv>
            
            <StyledText>Please Login</StyledText>

            <form onSubmit = {handleSubmit}>

                <StyledInput
                    type = "text"
                    name = "email"
                    placeholder = "Email"
                    onChange = {handleChange}
                    value = {credentials.email}
                />

                <StyledInput
                    type = "password"
                    name = "password"
                    placeholder = "Password"
                    onChange = {handleChange}
                    value = {credentials.password}
                />

                <StyledButton>Submit</StyledButton>
            </form>
        </StyledDiv>
    )
};

export default Login;


const StyledDiv = styled.div`
    margin-left: 20%;
    margin-top: 10%;
    background: #007B2B;
    box-sizing: border-box;
    margin-right: 37%; 
    padding-left: 15%;
    padding-bottom: 5%;
    width: 50%;
    border-radius: 9px;
`
const StyledInput = styled.input`
    display: flex;
    margin-bottom: 5%;
    padding: 1.1%;
    border-radius: 2px;
    border: 1px solid lightgrey;
    font-size: 1rem;
    width: 40%;
    margin-left: 4%;
`

const StyledButton = styled.button`
    padding: 2%;
    width: 30%;
    border-radius: 3px;
    font-size: .8rem;
    margin-left: 9%;
`
const StyledText = styled.h1`
    padding-top: 5%;
    
`