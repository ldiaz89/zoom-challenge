import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width:'100%',
    alignContent:'center',
    justifyContent:'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '30%',
  },
}));

export default function TimePickers({setClock1, setClock2, clock1, clock2}) {
  const classes = useStyles();
  // const [clock1, setClock1] = useState("07:30")
  // const [clock2, setClock2] = useState("12:00")
  return (
    <form className={classes.container} noValidate >
      <TextField
        id="time"
        // label="Alarm clock"
        type="time"
        name="clock1"
        value={clock1}
        onChange={(e) => setClock1(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <ArrowRightAltIcon style={{alignSelf:'center', width:'100px', fontSize:'40px'}}/>
       <TextField
        id="time"
        // label="Alarm clock"
        type="time"
        value={clock2}
        onChange={(e) => setClock2(e.target.value)}
        name="clock2"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  );
}