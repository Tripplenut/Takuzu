// React imports
import { useState } from 'react';
import './Tile.css';


function Tile({value_}){
  const [value, setValue] = useState(value_);
  
  function handleClick(){
    setValue(value+1);
  }

  return(
      <button
        className='tile'
        onClick={handleClick}>
        {value}
      </button>
  );
}

export default Tile;