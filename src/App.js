import React, { useState, useEffect } from "react";
import "./App.css";
//import TodoList from "./components/todoList";
import database from "./firebase_init";

function Home() {
  // state managment
  const [names, setNames] = useState([]);




  // hook to det data from database
  useEffect(() => {
    database
      .collection("memorial")
      .orderBy('timeStamp')
      .onSnapshot((Snapshot) => {
        setNames(
          Snapshot.docs.map((todo) => ({ id: todo.id, name: todo.data().name, ploga: todo.data().ploga }))
        );
      });
  }, []);


  return (
    <div>
      
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
      <div className="footer"> </div>
    </div>
  );
}

export default Home;
