import React from "react";
import { Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
const StudentData = (props) => {
  const data = useSelector((state) => state.UserData);
  const dispatch = useDispatch();
  //let id = 1;
  const handleRemove = (index) => {
    console.log("index",index)
  //dispatch({type:"remove",index:index})
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User Information</h1>
      {data.name}
      <TableContainer>
        <Table aria-label="simple table">
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
            {data.map((value) => (
              <TableRow  key={+new Date() + Math.random()}>  
                <TableCell align="right">{value.Name}</TableCell>
                <TableCell align="center">{value.College}</TableCell>
                <TableCell align="center">{value.Gender}</TableCell>
                <TableCell align="center">{value.BirthDate.toDateString()}
                              </TableCell>
                <TableCell align="center">{value.Address}</TableCell>
                <TableCell align="center">
                  <Button onClick={handleRemove}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentData;
