import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {useSelector} from 'react-redux';
const UserData=(props)=>
{
    const data=useSelector(state =>state.UserData)
   console.log(data)
 /*var day = data.BirthDate.getDate();
    var month =data.BirthDate.getMonth();
    var year = data.BirthDate.getFullYear();
    var string = day + '-' + month + '-' + year;
   */ 
     
    //console.log("bday",string)
    return(
  <div>
      <h1 style={{textAlign:"center"}}>User Information</h1>
       {data.name} 
       <TableContainer >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="center">College</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Birth Date</TableCell>
            <TableCell align="center">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(value =>(
                 
                
                     <TableRow>
              <TableCell align="right">{value.Name}</TableCell>
              <TableCell align="center">{value.College}</TableCell>
              <TableCell align="center">{value.Gender}</TableCell>
              <TableCell align="center">{}</TableCell>
              <TableCell align="center">{value.Address}</TableCell>
            </TableRow>
         ))}

        </TableBody>
      </Table>
    </TableContainer>
         
   



  </div>

  )

}

export default UserData
