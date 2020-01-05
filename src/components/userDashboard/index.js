import React from "react";
import Header from "./Header";
import Display from "./Display";

function Index({ user }) {
  return (
    <div>
      <Header />
      <Display user={user} />
    </div>
  );
}

export default Index;
