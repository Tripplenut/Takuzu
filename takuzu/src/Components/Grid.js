// React imports
import { useState, useEffect } from 'react';
import './Grid.css';

// Component imports
import Tile from './Tile';

let id = 0; // Unique id so every tile rerenders

function Grid({n, puzzle_}) {
  const[tiles, setTiles] = useState([]);
  const[tilesVal, setTilesVal] = useState([]);

  function onTileClick(val, row, col){
    const temp = tilesVal.map((rowArr, i) =>
      i === row ? rowArr.map((cell, j) =>
      (j === col ? val : cell)) : rowArr
    );
    setTilesVal(temp);
  }
  
  // Loads puzzles
  function loadPuzzle(){
    let newTiles = [];
    let newTilesVal = [];
    for(let i=0; i<n; i++){
      newTiles.push([]);
      newTilesVal.push([]);
      for(let j=0; j<n; j++){
        newTilesVal[i].push(puzzle_[i][j]);
        newTiles[i].push(
          <Tile
            key = {`${i}-${j}-${id}`}
            value_= {puzzle_[i][j]}
            mutability = {(puzzle_[i][j] === 2)}
            n = {n}
            setVal = {onTileClick}
            pos = {i*n+j}
          />);
        id+=1;
      }
    }
    setTiles(newTiles);
    setTilesVal(newTilesVal);
  }

  // Reloads board whenever puzzle_ is altered
  useEffect(() => {
    loadPuzzle();
    console.log(tilesVal);
  },[puzzle_]);

  return(
    <div className="base">
      {tiles.map((tile) => tile)}
    </div>
  );
  
}

export default Grid;