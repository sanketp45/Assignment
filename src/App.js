import React, { useState,useEffect} from 'react';
import Home from './Home';
import './App.css';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
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
      <AppBar  position="static" style={{background:"white", padding:"2rem"}}>

        <nav>
          
            <Link to="/">Home</Link>
            
            <Link to="/AddUser">AddUser</Link>
            <Link to="/UserData">UserData</Link>
           
        </nav>
        </AppBar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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