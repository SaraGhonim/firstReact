import React,{useContext} from 'react';
import { ThemeContext } from '../contexts/theme';
const ToggleButton = () => {

    const {toggleTheme} = useContext(ThemeContext)
    return ( 

        <button onClick={toggleTheme} className='btn btn-toggle'>Toggle</button>
    );
}
 
export default ToggleButton;