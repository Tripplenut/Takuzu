// React imports
import { useState } from 'react';

// Bootstrap imports
import { Container, Row } from 'react-bootstrap';

// Component imports
import Grid from '../../Components/Grid';
import PuzzleSelector from '../../Components/PuzzleSelector';
import {EIGHT1P, EIGHT2P, EIGHT3P, EIGHT1S, EIGHT2S, EIGHT3S} from '../../Components/Presets';

function Puzzle8x8(){
  const [puzzle, setPuzzle] = useState(EIGHT1P);
  const [puzzleSol, setPuzzleSol] = useState(EIGHT1S);
  const [puzzleNum, setPuzzleNum] = useState(1);

  function UpdatePuzzle(n){
    switch(n){
      case 1: setPuzzle(EIGHT1P); setPuzzleSol(EIGHT1S); break;
      case 2: setPuzzle(EIGHT2P); setPuzzleSol(EIGHT2S); break;
      case 3: setPuzzle(EIGHT3P); setPuzzleSol(EIGHT3S); break;
      default: setPuzzle(EIGHT1P); setPuzzleSol(EIGHT1S);
    }
    setPuzzleNum(n);
  }

  return(
    <Container className = "text-center">
      <Row>
        <h1 className="heading1">8x8 Puzzles</h1>
        <Grid n={8} puzzle={puzzle} puzzleSol={puzzleSol}/>
      </Row>
      <Row>
        <h3 className="heading3">Puzzle: {puzzleNum}</h3>
        <PuzzleSelector update={UpdatePuzzle}/>
      </Row>
    </Container>
  );
}

export default Puzzle8x8;