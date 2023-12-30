// React imports
import { useState, useEffect } from 'react';
import { Container, Row, Col, Fade } from 'react-bootstrap';
import './Grid.css';

// Component imports
import Tile from './Tile';

/**
 * Grid Object
 * @param {int} n The size of the puzzle
 * @param {int[][]} puzzle The initial board
 * @param {int[][]} puzzleSol The solution to the puzzle
 * @param {int} puzzleNum The puzzle number (used for tile id)
 * @returns All the tiles and game functionality
 */
function Grid({n, puzzle, puzzleSol, puzzleNum}) {
  const[tiles, setTiles] = useState([]); // Matrix of Tile objects
  const[tilesVal, setTilesVal] = useState(Array.from(puzzle, rows => Array.from(rows))); // Value of tile objects
  const[solved, setSolved] = useState(false); // Toggle for solved popup
  const[timer, setTimer] = useState(0); // Game timer

  function onTileClick(val, row, col){
    let temp = tilesVal;
    temp[row][col] = val;
    setTilesVal(temp);
    console.log(tilesVal);
    if(checkSolved()){
      console.log("Board has been solved");
    }
  }
  
  // Loads puzzles
  function loadPuzzle(){
    let newTiles = [];
    let newTilesVal = tilesVal;
    for(let i=0; i<n; i++){
      newTiles.push([]);
      for(let j=0; j<n; j++){
        newTilesVal[i][j] = puzzle[i][j];
        newTiles[i].push(
          <Tile
            key = {`${i},${j},${puzzleNum}`}
            value_= {puzzle[i][j]}
            mutability = {(puzzle[i][j] === 2)}
            n = {n}
            gridClick = {onTileClick}
            pos = {i*n+j}
          />);
      }
    }
    setTiles(newTiles);
    setTilesVal(newTilesVal);
    setSolved(false);
  }

  function checkSolved(){
    for(let r = 0; r < n; r++){
      for(let c = 0; c < n; c++){
        if(tilesVal[r][c] !== puzzleSol[r][c])
          return false;
      }
    }
    setSolved(true);
    return true;
  }

  // Reloads board whenever puzzle is altered
  useEffect(() => {
    loadPuzzle();
  },[puzzle]);

  // Incrementing the Timer
  useEffect(() => {
    let time;
    if (!solved){
      time = setInterval(() => {
        setTimer(prevTime => prevTime + 1)
      }, 1000);
    }
    return () => clearInterval(time)
  })

  const formatTime = (time) => {
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(1,'0')}:${seconds.toString().padStart(2,'0')}`
  } 

  return(
    <Container className="text-center">
      <Row>
        <Col>
        <h2 className="heading3"> Timer: {formatTime(timer)}</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <div className="base">
            {tiles.map((tile) => tile)}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Fade in={solved}>
            <h1 className="solvedText">Congrats you solved the puzzle!</h1>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
  
}

export default Grid;