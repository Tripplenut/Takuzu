// React imports
import { useState, useEffect} from 'react';
import './Tile.css';

function Tile({value_, mutability}){
  const [value, setValue] = useState(value_);
  let color;
  
  // Only changes value if tile is mutable
  function handleClick(){
    if(mutability)
      setValue((value+1)%3);
  }

  function getDisplay(){
    if(value === 0 || value === 1)
      return value;
    else
      return null;
  }

  // Changes buttons color
  function changeColor(){
    switch(value){
      case 0: color = 'Zero'; break;
      case 1: color = 'One'; break;
      //case 2: color = 'Null'; break;
      default: color = 'Null'
    }
  }
  changeColor(); // Sets color when component is created

  useEffect(() => {
    if(value_)
      setValue(value_);
  },[value_]);

  return(
      <button
        className={'tile ' + color}
        onClick={handleClick}>
        {getDisplay()}
      </button>
  );
}

export default Tile;