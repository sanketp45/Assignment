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
import StudentData from "./StudentData";
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

const StudentInformationForm = () => {
  const classes = useStyles();
  let history = useHistory();

  const [userinfo, setUserinfo] = useState({
    Name: "",
    Address: "",
    BirthDate: "",
    Gender: "",
    MobileNumber: "",
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
    history.push("/StudentData");
  };

  return (
    <div>
      <form>
        <h1 style={{textAlign:"center"}}>Student Information</h1>
        {showdata ? (
          <StudentData data={userinfo} />
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
                label="Mobile Number"
                name="mobile number "
                type="number"
                placeholder="enter mobile number"
                onChange={(e) =>
                  setUserinfo({ ...userinfo, MobileNumber: e.target.value })
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
              
            </Grid>
            <Grid item xs={12} sm={12} style={{ marginTop: "1rem" }}>
              <Button onClick={handleSubmit}>Submit</Button>
            </Grid>
          </Grid>
        )}
      </form>
    </div>
  );
};

export default withStyles(useStyles)(StudentInformationForm);
