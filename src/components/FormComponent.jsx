import React from "react";
import { Button, makeStyles, FormControlLabel } from "@material-ui/core";
import InputComponent from "./InputComponent";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import { useState } from "react";
import TimePickers from "./TimePickers";
import Checkbox from "@material-ui/core/Checkbox";
import { Redirect, useHistory } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const useStyles = makeStyles((theme) => ({
  button: {
    height: "40px",

    padding: 10,
  },
  buttonEdit: {
    height: "40px",
    padding: 10,
    width: "80%",
    alignSelf: "center",
    marginBottom: "50px",
  },
  paragraph: {
    textAlign: "center",
    alignSelf: "center",
  },
}));

export const FormComponent = () => {
  const history = useHistory();
  const classes = useStyles();
  const [listData, useListData] = useState([]);
  const [clock1, setClock1] = useState("07:30");
  const [clock2, setClock2] = useState("12:00");
  const [value, setValue] = useState([new Date()]);
  const onSubmit = () => {
    console.log("clock data", clock1, clock2);
    value.shift();
    // const date = value
    history.push({
      pathname: "/booking-list",
      state: { time: { clock1, clock2 }, dates: value },
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <p className={classes.paragraph}>Book from Scratch</p>
        <Button variant="contained" color="primary" className={classes.button}>
          Re-Book Staff
        </Button>
      </div>
      <div style={{ width: "100%", height: "80px" }}>
        <InputComponent />
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          alignContent: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TimePickers
          clock1={clock1}
          clock2={clock2}
          setClock1={setClock1}
          setClock2={setClock2}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedA}
              // onChange={handleChange}
              name="checkedA"
            />
          }
          label="Been Before"
        />
        <div
          style={{ margin: "20px", display: "flex", justifyContent: "center" }}
        >
          <Calendar
            onChange={(val) => setValue([...value, val])}
            value={value}
            onClick={(value) => console.log(value)}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          className={classes.buttonEdit}
          onClick={onSubmit}
          style={{marginBottom:'40px'}}
        >
          CREATE BOOKINGS
        </Button>
      </div>
    </div>
  );
};
