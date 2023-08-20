// React imports
import { useState, useRef } from 'react';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Component imports
import Grid from '../../Components/Grid';
import PuzzleSelector from '../../Components/PuzzleSelector';
import {EIGHT1P, EIGHT2P, EIGHT3P} from '../../Components/Presets';

function Puzzle8x8(){
  const [puzzle, setPuzzle] = useState(EIGHT1P);
  const [puzzleNum, setPuzzleNum] = useState(1);
  const gridRef = useRef(null);

  function UpdatePuzzle(n){
    switch(n){
      case 1: setPuzzle(EIGHT1P); break;
      case 2: setPuzzle(EIGHT2P); break;
      case 3: setPuzzle(EIGHT3P); break;
      default: setPuzzle(EIGHT1P);
    }
    setPuzzleNum(n);
  }

  return(
    <Container>
      <Row className='justify-content-md-center'>
        <h1>
          8x8 Puzzles
        </h1>  
        <Grid n={8} puzzle_={puzzle} ref={gridRef}/>
      </Row>
      <Row className="justify-content-md-center">
        <h3>Puzzle: {puzzleNum}</h3>
        <PuzzleSelector update={UpdatePuzzle}/>
      </Row>
      <Row>
        {/*Footer*/}
        This will be a footer
      </Row>
    </Container>
  );
}

export default Puzzle8x8;