import React,{useContext} from 'react';
import { TodoListContext } from "../contexts/todoList";

const NavBar = () => {
    const {todolist}=useContext(TodoListContext)
    return (
        <h2 style={{color:'red'}}>You Have {todolist.length} tasks to finish</h2>
      );
}
 
export default NavBar;