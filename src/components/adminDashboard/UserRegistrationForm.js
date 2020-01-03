import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import moment from 'moment';
import { Spin } from "antd";
import axiosWithAuth from "../../authentication/axiosWithAuth";

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

function UserRegistrationForm(props) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    familySize: ""
  });

  // display a spinner on isLoading when posting a new record
  const [loading, setLoading] = useState(props.createNewStudentIsLoading);

  useEffect(() => {}, [loading]);

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axiosWithAuth()
      .post("https://gma-scheduler.herokuapp.com/api/auth/register", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        const id = localStorage.getItem("id");

        axiosWithAuth()
          .get(`/users/${id}`)
          .then(res => {
            props.history.push("/dashboard");
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleCancel(event) {
    event.preventDefault();
    props.handleCancelButtonOnForm();
  }

  return (
    <FormWrap onSubmit={handleSubmit} style={{ margin: "30px 10px 20px 10px" }}>
      <fieldset
        style={{
          border: "1px solid transparent",
          margin: "10px 5px 0px 5px",
          background: "#d8dee0"
        }}
      >
        <div
          style={{
            display: "grid",
            textAlign: "left",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridGap: "10px",
            margin: "10px"
          }}
        >
          <div>
            <label>First Name</label>
            <div>
              <Input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <Input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <label>Email</label>
            <div>
              <Input
                style={{ width: "100%" }}
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <label>Family Size</label>
            <div>
              <Input
                style={{ width: "100%" }}
                type="text"
                name="familySize"
                value={user.familySize}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <div style={{ gridColumn: "span 1" }}>
            <label>Child's Name</label>
            <div>
              <Input
                style={{ width: "100%" }}
                type="text"
                name="name"
                value={childsName}
                onChange={handleChildChange}
              />
            </div>
            <AddChildButton onClick={addChild}>Add Child</AddChildButton>
          </div>
          <div style={{ gridColumn: "span 1" }}>
            <ChildrenContainer>
              <h3>Children</h3>
              <h4>{student}</h4>
              {console.log(student)}
              <p>{student}</p>
              {/*{student.map(stu => alert(InsideMap))}
            </ChildrenContainer>
          </div> */}
        </div>
      </fieldset>
      <div style={{ alignSelf: "flex-end" }}>
        <Button
          onClick={handleCancel}
          style={{ background: "#C73642", width: "80px" }}
        >
          Cancel
        </Button>
        <Button type="submit">Add student</Button>
      </div>
    </FormWrap>
  );
}

export default UserRegistrationForm;
