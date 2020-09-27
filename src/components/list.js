import React, {useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { TodoListContext } from "../contexts/todoList";
import ToggleButton from "./toggleButton";

const List = () => {
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  const {todolist,deleteTodo}=useContext(TodoListContext)
 
  return (
    <div className="list-container">
      <ul className="list">
        {todolist.map((todo) => {
          return (
            <div key={todo.id}>
              <li style={{ background: theme.ui, color: theme.text }}>
                {todo.name}<button className="btn btn-delete"
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >X</button>
              </li>
            </div>
          );
        })}

      </ul>
      <ToggleButton/>

    </div>
  );
};

export default List;
