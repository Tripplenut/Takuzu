// React imports
import { useState } from 'react';
import './Tile.css';


function Tile({value_}){
  const [value, setValue] = useState(value_);
  
  function handleClick(){
    setValue((value+1)%3);
  }

  function getDisplay(){
    if(value === 0 || value === 1)
      return value;
    else
      return null;
  }

  return(
      <button
        className='tile'
        onClick={handleClick}>
        {getDisplay()}
      </button>
  );
}

export default Tile;