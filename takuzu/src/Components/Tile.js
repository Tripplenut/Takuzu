// React imports
import { useState } from 'react';

// Bootstrap imports
import Button from 'react-bootstrap/Button'


function Tile({value_}){
  const [value, setValue] = useState(0);
  
  function handleClick(){
    setValue(value+1);
  }

  return(
      <Button
        className='border border-dark rounded-0'
        variant='primary'
        onClick={handleClick}>
        {value}
      </Button>
  );
}

export default Tile;