import React from 'react';
import { useHistory } from "react-router-dom";

import {Button } from "@material-ui/core";
const Home=() =>
{
    let history = useHistory();

    const handleAdd=() =>
    {
       
        history.push("/AddUser");


    }
  const handleUser=() =>
  {
    history.push("/UserData");


  }  
 return(
  <div style={{textAlign:"center", marginTop:"5rem"}}>
  <Button onClick={handleAdd}>Add User</Button>
  <Button onClick={handleUser}> User Information</Button>


  </div>


 )

}

export default Home