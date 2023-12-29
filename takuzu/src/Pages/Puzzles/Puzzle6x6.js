// React imports
import { useState } from 'react';

// Bootstrap imports
import { Container, Row } from 'react-bootstrap';

// Component imports
import Grid from '../../Components/Grid';
import PuzzleSelector from '../../Components/PuzzleSelector';
import {SIX1P, SIX1S, SIX2P, SIX2S, SIX3P, SIX3S} from '../../Components/Presets';

function Puzzle6x6(){
  const [puzzle, setPuzzle] = useState(SIX1P);
  const [puzzleSol, setPuzzleSol] = useState(SIX1S);
  const [puzzleNum, setPuzzleNum] = useState(1);

  function UpdatePuzzle(n){
    if(n === puzzleNum)
      return;
    switch(n){
      case 1: setPuzzle(SIX1P); setPuzzleSol(SIX1S); break;
      case 2: setPuzzle(SIX2P); setPuzzleSol(SIX2S); break;
      case 3: setPuzzle(SIX3P); setPuzzleSol(SIX3S); break;
      default: setPuzzle(SIX1P); setPuzzleSol(SIX1S);
    }
    setPuzzleNum(n);
  }

  return(
    <Container className = "text-center">
      <Row>
        <h1 className="heading1">
          6x6 Puzzles
        </h1>
        <Grid n={6} puzzle={puzzle} puzzleSol={puzzleSol}/>
      </Row>
      <Row>
        <h3 className="heading3">Puzzle: {puzzleNum}</h3>
        <PuzzleSelector update={UpdatePuzzle}/>
      </Row>
      <Row>
        {/*Footer*/}
        This will be a footer
      </Row>
    </Container>
  );
}

export default Puzzle6x6;