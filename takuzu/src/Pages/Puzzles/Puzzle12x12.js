// React imports
import { useState, useRef } from 'react';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Component imports
import Grid from '../../Components/Grid';
import PuzzleSelector from '../../Components/PuzzleSelector';
import {TWELVE1P, TWELVE2P, TWELVE3P} from '../../Components/Presets';

function Puzzle12x12(){
  const [puzzle, setPuzzle] = useState(TWELVE1P);
  const [puzzleNum, setPuzzleNum] = useState(1);
  const gridRef = useRef(null);

  function UpdatePuzzle(n){
    switch(n){
      case 1: setPuzzle(TWELVE1P); break;
      case 2: setPuzzle(TWELVE2P); break;
      case 3: setPuzzle(TWELVE3P); break;
      default: setPuzzle(TWELVE1P);
    }
    setPuzzleNum(n);
  }

  return(
    <Container>
      <Row className='justify-content-md-center'>
        <h1>
          12x12 Puzzles
        </h1>  
        <Grid n={12} puzzle_={puzzle} ref={gridRef}/>
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

export default Puzzle12x12;