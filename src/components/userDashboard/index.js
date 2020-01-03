import React from "react";
import Header from "./Header";
//import Display from "./Display";
import UserDashboard from "./UserDashboard";

function Index({ user }) {
  return (
    <div>
      {/*<Header />*/}
      <UserDashboard user={user} />
    </div>
  );
}

export default Index;
