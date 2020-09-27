import React, { useContext, useState } from "react";
import { TodoListContext } from "../contexts/todoList";

const AddToDo = () => {
  const { addTodo } = useContext(TodoListContext);
  const [newTodo, setNewTodo] = useState("");

  const mySubmitHandler = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    document.querySelector("form").reset();
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <div className="App">
      <form onSubmit={mySubmitHandler}>
        
          <input
            required
            type="text"
            name="name"
            placeholder="Add a todo…"
            id="item"
            value={newTodo}
            onChange={handleChange}
          />
         <button className="btn btn-add">Add</button>
      </form>
    </div>
  );
};

export default AddToDo;
