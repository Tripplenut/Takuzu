// React imports
import { useState } from 'react';

// Bootstrap imports
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

function PuzzleSelector({update}){

  // Changes the puzzle in parent
  function handleClick(n_){
    update(n_);
  }

  
  return(
    <Dropdown>
      <Dropdown.Toggle variant='primary'>
        Puzzles
      </Dropdown.Toggle>

      <DropdownMenu>
        <Dropdown.Item onClick={() => handleClick(1)}>Puzzle 1</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick(2)}>Puzzle 2</Dropdown.Item>
      </DropdownMenu>
    </Dropdown>
  );
}

export default PuzzleSelector;

/**

 */