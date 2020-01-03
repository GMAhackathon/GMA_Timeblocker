import React from "react";

const AccountSettingsPanel = props => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="edit-settings-grid">
      <div>Avatar (only if time)</div>
      <div>
        <h1>Address</h1>
        <form onSubmit={handleSubmit}>
          Address: <input type="text" name="address" value={props.address} />
          City: <input type="text" name="City" value={props.city} />
          State: <input type="text" name="State" value={props.state} />
          Zip Code: <input type="text" name="Zip Code" value={props.zip} />
        </form>
      </div>
      <div>Edit Family</div>

      <div>Reset Password</div>
    </div>
  );
};

export default AccountSettingsPanel;
