import React from "react";
import styled from "styled-components";
import Logo from "../../assets/GMA.png";

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

function Header(props) {
  const message = localStorage.getItem('message');

  const logout = () => {
    props.history("/login");
  };

  return (
    <NavAdmin>
      <NavBarLeft>
        <LogoWrap>
          <LogoImg src={Logo}></LogoImg>
        </LogoWrap>
      </NavBarLeft>

      <NavBarRight>
        <div style={{fontWeight: '600', paddingRight: '20px'}}>{message}</div>
        <a onClick={logout} style={{ color: "#89878a" }}>
          Sign out
        </a>
      </NavBarRight>
    </NavAdmin>
  );
}
export default Header;
