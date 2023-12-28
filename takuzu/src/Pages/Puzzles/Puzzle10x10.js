// React imports
import { useState } from 'react';

// Bootstrap imports
import { Container, Row } from 'react-bootstrap';

// Component imports
import Grid from '../../Components/Grid';
import PuzzleSelector from '../../Components/PuzzleSelector';
import {TEN1P, TEN1S, TEN2P, TEN2S, TEN3P, TEN3S} from '../../Components/Presets';

function Puzzle10x10(){
  const [puzzle, setPuzzle] = useState(TEN1P);
  const [puzzleSol, setPuzzleSol] = useState(TEN1S);
  const [puzzleNum, setPuzzleNum] = useState(1);

  function UpdatePuzzle(n){
    switch(n){
      case 1: setPuzzle(TEN1P); setPuzzleSol(TEN1S); break;
      case 2: setPuzzle(TEN2P); setPuzzleSol(TEN2S); break;
      case 3: setPuzzle(TEN3P); setPuzzleSol(TEN3S); break;
      default: setPuzzle(TEN1P); setPuzzleSol(TEN1S);
    }
    setPuzzleNum(n);
  }

  return(
    <Container className = "text-center">
      <Row>
        <h1 className="heading1">10x10 Puzzles</h1>
        <Grid n={10} puzzle={puzzle} puzzleSol={puzzleSol}/>
      </Row>
      <Row>
        <h3 className="heading3">Puzzle: {puzzleNum}</h3>
        <PuzzleSelector update={UpdatePuzzle}/>
      </Row>
    </Container>
  );
}

export default Puzzle10x10;