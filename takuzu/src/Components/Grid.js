// React imports
import './Grid.css';

// Component imports
import Tile from './Tile';

function Grid({n, puzzle_}) {
  var tiles = [];

  function loadPuzzle(puzzle){
    for(var i=0; i<n; i++){
    tiles.push([]);
      for(var j=0; j<n; j++){
      tiles[i].push(<Tile value_={puzzle[i][j]}/>);
      }
    }
  }
  loadPuzzle(puzzle_); // Loads default puzzle

  return(
    <div className="base">{tiles}</div>
  );
  
}

export default Grid;