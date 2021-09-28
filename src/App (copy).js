import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "./App.css";
//import TodoList from "./components/todoList";

import database from "./firebase_init";
import { Button, TextField } from "@material-ui/core";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MenuItem from '@mui/material/MenuItem';
const currencies = [
  {
    value: 'red',
    label: 'שיאון',
  },
  {
    value: 'yew',
    label: 'דלתון',
  },
  {
    value: 'gre',
    label: 'חרמון',
  },
  {
    value: 'bw',
    label: 'קדרון',
  },
];

function Home() {
  // state managment
  const [names, setNames] = useState([]);
  const [input_name, setInput_name] = useState("");
  const [currency, setCurrency] = useState('red');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };


  // hook to det data from database
  useEffect(() => {
    database
      .collection("memorial")
      .onSnapshot((Snapshot) => {
        setNames(
          Snapshot.docs.map((todo) => ({ id: todo.id, name: todo.data().name, ploga: todo.data().ploga }))
        );
      });
  }, []);

  // function to add todo to our database
  const Addtodo = (event) => {
    event.preventDefault();
    if (input_name !== "") {
      database.collection("memorial").add({
        name: input_name,
        ploga:currency,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput_name("");
  };

  return (
    <div class ="bg">
      <div class ="center">
             <TextField 
          id="outlined-select-currency"
          select
          label="פלוגה"
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem  key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div className="center">
        <TextField
          
          id="standard-basic"
          label="שם החלל"
          type="text"
          value={input_name}
          onChange={(event) => setInput_name(event.target.value)}
        />
        </div>
        <Button 
          className="center"
          variant="outlined"
          type="submit"
          color="primary"
          size="large"
          onClick={Addtodo}
          startIcon={<LocalFireDepartmentIcon />}
        >
הדלק נר        </Button>
      
      <h3 className="heading">יזכור</h3>
      <div className="container">
        {names.map((name) => (
      <div class={"card_"+name.ploga} >
      <div class="overlay">        
        <div class={"center_"+name.ploga}>
        {name.name}
        </div>
      </div>
    </div>
            ))}
      </div>
    </div>
  );
}

export default Home;
