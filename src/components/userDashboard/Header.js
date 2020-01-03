import React from "react";
import styled from "styled-components";
import Logo from "../../assets/GMA.png";
import AccountSettingsPanel from "./AccountSettingsPanel";

const NavAdmin = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
`;

const LogoWrap = styled.a`
  font-size: 24px;
  color: white;
  font-weight: 700;
  margin-left: 40px;
`;

const LogoImg = styled.img`
  width: 85px;
  height: 85px;
`;

const NavBarRight = styled.div`
  display: flex;
  padding-right: 40px;
  color: #89878a;
`;

const NavBarLeft = styled.div`
  display: flex;
  padding-right: 40px;
  color: #89878a;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-left: 15px;
  color: #89878a;
  align-items: center;
`;

function Header(props) {
  const logout = () => {
    props.history("/login");
  };

  const toDashboard = () => {};

  return (
    <NavAdmin>
      <NavBarLeft>
        <LogoWrap>
          <LogoImg src={Logo}></LogoImg>
        </LogoWrap>
        <ButtonContainer>
          <img src="" />
          <button onClick={toDashboard}>Dashboard</button>
        </ButtonContainer>
      </NavBarLeft>

      <NavBarRight>
        <div style={{ fontWeight: "600", paddingRight: "20px" }}>
          Hello, username!
        </div>
        <div className="rightside-button-container">
          <button onClick={() => AccountSettingsPanel}>Account Settings</button>
        </div>
        <a onClick={logout} style={{ color: "#89878a" }}>
          Sign out
        </a>
      </NavBarRight>
    </NavAdmin>
  );
}
export default Header;
