// React imports
import { useState, useEffect } from 'react';
import './Grid.css';

// Component imports
import Tile from './Tile';

function Grid({n, puzzle_}) {
  const[tiles, setTiles] = useState([]);
  
  // Loads puzzles
  function loadPuzzle(){
    let newTiles = [];
    for(let i=0; i<n; i++){
      newTiles.push([]);
      for(let j=0; j<n; j++){
        newTiles[i].push(
          <Tile
            value_={puzzle_[i][j]}
            mutability={(puzzle_[i][j] === 2)}
          />);
      }
    }
    setTiles(newTiles);
  }

  // Reloads board whenever puzzle_ is altered
  useEffect(() => {
    if(puzzle_)
      loadPuzzle();
  });

  return(
    <div className="base" style={{width: n*60+n*10+n*2, height: n*60+n*10+n*2}}>{tiles}</div>
  );
  
}

export default Grid;