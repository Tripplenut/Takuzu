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
        if(puzzle[i][j]==0) {
          tiles[i].push(<button className="tile" style={{backgroundColor:"#F26430"}} value_={puzzle[i][j]}>{puzzle[i][j]}</button>)}
        else if(puzzle[i][j]==1) {
          tiles[i].push(<button className="tile" style={{backgroundColor:"#4D9DE0"}} value_={puzzle[i][j]}>{puzzle[i][j]}</button>)}
        else {tiles[i].push(<Tile value_={puzzle[i][j]}/>);}
      }
    }
  }
  loadPuzzle(puzzle_); // Loads default puzzle

  return(
    <div className="base">{tiles}</div>
  );
  
}

export default Grid;