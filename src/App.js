import React, { useState,useEffect} from 'react';
import Home from './Home';
import './App.css';
import axios from 'axios';

import StudentInformationForm from './StudentInformationForm';
import StudentData from './StudentData';
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
            
            <Link to="/StudentInformationForm" style={{padding:"15px",textDecoration:"none",color:"black",fontSize:"20px"}} >Student Information Fom</Link>
            <Link to="/StudentData" style={{padding:"15px",textDecoration:"none",color:"black",fontSize:"20px"}} >Student Data</Link>
            </div>
        </nav>
        </AppBar>
        <Switch>
        <Route exact path="/">
         <Home />
         </Route>
          <Route path="/StudentInformationForm">
            <StudentInformationForm />
          </Route>
          <Route path="/StudentData">
            <StudentData />
          </Route>
             </Switch>
      </div>
    </Router>
       
      </div>


     )

   }

}
export default App