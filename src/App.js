import React, { useState,useEffect} from 'react';
import Home from './Home';
import './App.css';
import axios from 'axios';

import AddUser from './AddUser';
import UserData from './UserData';
import AppBar from '@material-ui/core/AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component
{
   render()
   {
     return(
      <div>
    <Router>
      <div>
      <AppBar  position="static" style={{background:"white",padding:"2rem"}}>
         <nav>
          <div >
            <Link to="/" style={{padding:"15px",textDecoration:"none",color:"black",fontSize:"20px"}} >Home</Link>
            
            <Link to="/AddUser"style={{padding:"15px",textDecoration:"none",color:"black",fontSize:"20px"}} >AddUser</Link>
            <Link to="/UserData"style={{padding:"15px",textDecoration:"none",color:"black",fontSize:"20px"}} >UserData</Link>
            </div>
        </nav>
        </AppBar>
        <Switch>
        <Route exact path="/">
         <Home />
         </Route>
          <Route path="/AddUser">
            <AddUser />
          </Route>
          <Route path="/UserData">
            <UserData />
          </Route>
             </Switch>
      </div>
    </Router>
       
      </div>


     )

   }

}
export default App