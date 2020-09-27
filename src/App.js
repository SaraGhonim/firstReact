import React from "react";
import AddToDo from "./components/addTodo";
import List from "./components/list";
import NavBar from "./components/navBar";
import ThemeContextProvider from "./contexts/theme";
import TodoListContextProvider from "./contexts/todoList";

const App = () => {
  return (
    <ThemeContextProvider>
      <TodoListContextProvider>
        <NavBar/>
        <AddToDo />
        <List />
      </TodoListContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
