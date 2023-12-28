// React imports
import { useState } from 'react';

// Bootstrap imports
import { Container, Row } from 'react-bootstrap';

// Component imports
import Grid from '../../Components/Grid';
import PuzzleSelector from '../../Components/PuzzleSelector';
import {TWELVE1P, TWELVE1S, TWELVE2P, TWELVE2S, TWELVE3P, TWELVE3S} from '../../Components/Presets';

function Puzzle12x12(){
  const [puzzle, setPuzzle] = useState(TWELVE1P);
  const [puzzleSol, setPuzzleSol] = useState(TWELVE1S);
  const [puzzleNum, setPuzzleNum] = useState(1);

  function UpdatePuzzle(n){
    switch(n){
      case 1: setPuzzle(TWELVE1P); setPuzzleSol(TWELVE1S); break;
      case 2: setPuzzle(TWELVE2P); setPuzzleSol(TWELVE2S); break;
      case 3: setPuzzle(TWELVE3P); setPuzzleSol(TWELVE3S); break;
      default: setPuzzle(TWELVE1P); setPuzzleSol(TWELVE1S);
    }
    setPuzzleNum(n);
  }

  return(
    <Container className = "text-center">
      <Row>
        <h1 className="heading1">12x12 Puzzles</h1>
        <Grid n={12} puzzle={puzzle} puzzleSol={puzzleSol}/>
      </Row>
      <Row>
        <h3 className="heading3">Puzzle: {puzzleNum}</h3>
        <PuzzleSelector update={UpdatePuzzle}/>
      </Row>
    </Container>
  );
}

export default Puzzle12x12;