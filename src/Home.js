import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";
const Home = () => {
  let history = useHistory();

  const handleAdd = () => {
    history.push("/StudentInformationForm");
  };
  const handleUser = () => {
    history.push("/StudentData");
  };
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <Button onClick={handleAdd}>Student Information</Button>
      <Button onClick={handleUser}> Student Data</Button>
    </div>
  );
};

export default Home;
