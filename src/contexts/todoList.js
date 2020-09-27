import React, { useState, createContext } from "react";

export const TodoListContext = createContext();

const TodoListProvider = (props) => {
  const [todolist, setList] = useState([
    { name: "Walk the dog", id: 0 },
    { name: "Bake a cake", id: 1 },
    { name: "Study for the test", id: 2 },
  ]);
  const deleteTodo = (id) => {
    setList(
      todolist.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const addTodo = (newTodo) => {
    setList([...todolist, { name: newTodo, id: todolist.length }]);
    console.log(todolist)
  };
  return (
    <TodoListContext.Provider value={{ todolist, deleteTodo, addTodo }}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
