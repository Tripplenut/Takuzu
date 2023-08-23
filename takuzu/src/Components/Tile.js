// React imports
import { useState, useEffect } from 'react';
import './Tile.css';

function Tile({value_, mutability, n, setVal, pos}){
  const [value, setValue] = useState(value_);
  let color;
  let style;

  // Determines Tile Size
  if(n===6) style = {height: "75px", width: "75px", margin: "2px", fontSize: "40px"};
  else if(n===8) style = {height: "55px", width: "55px", margin: "2px", fontSize: "30px"};
  else if(n===10) style = {height: "45px", width: "45px", margin: "1px", fontSize: "25px"};
  else if(n===12) style = {height: "37px", width: "37px", margin: "1px", fontSize: "23px"};

  // Only changes value if tile is mutable
  function handleClick(){
    if(mutability){
      setValue((value+1)%3);
      let row = pos/n;
      let col = pos%n;
      setVal(value, row, col);
    }
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
      case 0: color = (mutability)?'Zero':'ZeroImmutable'; break;
      case 1: color = (mutability)?'One':'OneImmutable'; break;
      default: color = 'Null';
    }
  }
  changeColor(); // Sets color when component is created

  useEffect(() => {
    setValue(value_);
  },[value_]);

  return(
      <button
        className={`tile ${color}`}
        onClick={handleClick}
        style={style}>
        {getDisplay()}
      </button>
  );
}

export default Tile;