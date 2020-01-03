// import React from "react";
// import AccountSettingsPanel from "./AccountSettingsPanel";

// const toDashboard = () => {};

// const UserNavbar = () => {
//   return (
//     <div className="user-nav-bar">
//       <div>
//         <div className="leftside-button-container">
//           <img src="" />
//           <button onClick={toDashboard}>Dashboard</button>
//         </div>
//         <div className="rightside-button-container">
//           <button onClick={AccountSettingsPanel}>Account Settings</button>
//           <button>Sign Out</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserNavbar;

import React from "react";
import styled from "styled-components";
import Logo from "../assets/GMA.png";
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

function Header(props) {
  const logout = () => {
    props.history("/login");
  };

  const toDashboard = () => {};

  return (
    <NavAdmin>
      <div className="navbar-left">
        <LogoWrap>
          <LogoImg src={Logo}></LogoImg>
        </LogoWrap>
        <div className="leftside-button-container">
          <img src="" />
          <button onClick={toDashboard}>Dashboard</button>
        </div>
      </div>
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
