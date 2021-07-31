import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function BookingList(props) {
  console.log("list", props.location.state.dates);
  const { clock1, clock2 } = props.location.state.time;
  const { dates } = props.location.state;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p style={{ margin: "10px" }}>Bookings to Confirmed</p>
      {dates.map((date) => (
        <div
          style={{
            width: "80%",
            height: "100px",
            border: "solid 4px blue",
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom:'5px'
          }}
        >
          <div
            style={{
              height: "100%",
              width: "20%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AccountCircleIcon
              style={{ fontSize: "50px", alignSelf: "center" }}
            />
          </div>
          <div
            style={{
              height: "100%",
              width: "auto",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <p style={{ margin: "5px" }}>{`${date.toDateString()}`}</p>
            <p style={{ margin: "5px" }}>Dorothy es availible</p>
          </div>
          <div style={{ height: "100%", width: "auto", display: "flex" }}>
            <p style={{ marginTop: "15px" }}>{`${clock1}-${clock2}`}</p>
            <ArrowForwardIosIcon />
          </div>
        </div>
      ))}
    </div>
  );
}
