import React from "react";
import "../components/todolist.css";


const TodoList = (props) => {
  return (
      <div class="card">
      <div class="content">
        <div class="center">
        {props.text.name}
        </div>
      </div>
    </div>
    
  );
};

export default TodoList;
