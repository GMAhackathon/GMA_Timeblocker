import React from "react";

const UserNavbar = () => {
  return (
    <div className="user-nav-bar">
      <div>
        <div className="leftside-button-container">
          <img src="" />
          <button onClick={toDashboard}>Dashboard</button>
        </div>
        <div className="rightside-button-container">
          <button onClick={AccountSettingsPanel}>Account Settings</button>
          <button>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
