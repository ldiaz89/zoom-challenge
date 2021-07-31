/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { fecthData } from "../api";

export default function InputComponent() {
    const [inputData, setInputData] = useState([]);

    useEffect( () => {
        fecthData()
        .then(resp =>
            setInputData(resp.grades)
        )
        .catch(err => console.log(err))
        
        
    }, [])
  return (
    <Autocomplete
      id="combo-box-demo"
      options={inputData}
      getOptionLabel={(option) => option}
      style={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
  );
}