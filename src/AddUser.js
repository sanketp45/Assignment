import React, { useState, useEffect } from "react";
import {
  TextField,
  Grid,
  InputLabel,
  Select,
  Button,
  Menu,
  MenuItem,
  FormGroup,
  Checkbox,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import DatePicker from "react-datepicker";
import axios from "axios";
import UserData from "./UserData";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: "center",
  },
}));

const AddUser = () => {
  const classes = useStyles();
  let history = useHistory();

  const [userinfo, setUserinfo] = useState({
    Name: "",
    Address: "",
    BirthDate: "",
    Gender: "",
    College: "",
  });
  const [showdata, setShowData] = useState(false);
  const [Hobbies, setHobbies] = React.useState({
    Reading: false,
    Gaming: false,
    Travelling: false,
    Drawing: false,
  });

  const [college, setCollege] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.UserData);
  const handleChange = (event) => {
    setHobbies({ ...Hobbies, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    axios
      .get(
        "http://universities.hipolabs.com/search?name=Engineering&country=India"
      )
      .then((res) => {
        setCollege(res.data);
      });
  }, []);

  const handleSubmit = () => {
    console.log("data", userinfo, Hobbies);
    setShowData(true);
    dispatch({ type: "add-user", payload: userinfo });
    history.push("/UserData");
  };

  return (
    <div>
      <form>
        {showdata ? (
          <UserData data={userinfo} />
        ) : (
          <Grid container className={classes.paper}>
            <Grid
              item
              xs={12}
              sm={12}
              style={{
                width: "95%",
                fontSize: "20px",
                marginTop: ".07rem",
                marginBottom: "1.5rem",
              }}
            >
              <TextField
                id="standard-basic"
                label="Name"
                name="name"
                placeholder="enter your name here"
                onChange={(e) =>
                  setUserinfo({ ...userinfo, Name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="filled-basic"
                label="address"
                name="address"
                multiline
                rowsMax={4}
                onChange={(e) =>
                  setUserinfo({ ...userinfo, Address: e.target.value })
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              style={{
                width: "95%",
                marginTop: "1.3rem",
                marginBottom: "1.5rem",
              }}
            >
              <FormLabel component="legend">Birth Date</FormLabel>
              <DatePicker
                selected={userinfo.BirthDate}
                onChange={(Date) =>
                  setUserinfo({ ...userinfo, BirthDate: Date })
                }
                maxDate={new Date()}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormLabel component="legend">Gender</FormLabel>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="gender"
                  name="Gender"
                  onChange={(e) =>
                    setUserinfo({ ...userinfo, Gender: e.target.value })
                  }
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              style={{
                fontSize: "20px",
                marginTop: "1.5rem",
                marginBottom: "1.7rem",
              }}
            >
              <FormLabel component="legend">Hobbies</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Hobbies.checked}
                    onChange={handleChange}
                    name="Reading"
                  />
                }
                label="Reading"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Hobbies.checked}
                    onChange={handleChange}
                    name="Gaming"
                  />
                }
                label="Gaming"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Hobbies.checked}
                    onChange={handleChange}
                    name="Travelling"
                  />
                }
                label="Travelling"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Hobbies.checked}
                    onChange={handleChange}
                    name="Drawing"
                  />
                }
                label="Drawing"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel>College</InputLabel>
              <Select
                labelId="select-label"
                id="simple-select"
                name="facid"
                style={{ width: "30%", marginTop: ".07rem" }}
                onChange={(event) =>
                  setUserinfo({ ...userinfo, College: event.target.value.name })
                }
              >
                <MenuItem value=""></MenuItem>
                {college &&
                  college.map((items, index) => (
                    <MenuItem key={items} value={items}>
                      {items.name}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={12} style={{ marginTop: "2rem" }}>
              <Button onClick={handleSubmit}>Submit</Button>
            </Grid>
          </Grid>
        )}
      </form>
    </div>
  );
};

export default withStyles(useStyles)(AddUser);
