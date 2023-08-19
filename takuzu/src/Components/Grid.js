// React imports
import { useEffect } from 'react';
import './Grid.css';

// Component imports
import Tile from './Tile';

function Grid({n, puzzle_}) {
  var tiles = [];
  
  // Checks if the puzzle passed in from the parent has been altered
  useEffect(() => {
    console.log("Puzzle Changed?");
  });
  
  // Loads puzzles
  function loadPuzzle(){
    for(var i=0; i<n; i++){
    tiles.push([]);
      for(var j=0; j<n; j++){
        tiles[i].push(<Tile value_={puzzle_[i][j]}
                            mutability={(puzzle_[i][j] === 2)}/>);
      }
    }
  }
  loadPuzzle(); // Loads default puzzle

  return(
    <div className="base">{tiles}</div>
  );
  
}

export default Grid;