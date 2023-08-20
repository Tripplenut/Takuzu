// React imports
import { useState, useRef } from 'react';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Component imports
import Grid from '../../Components/Grid';
import PuzzleSelector from '../../Components/PuzzleSelector';
import {SIX1P, SIX2P, SIX3P} from '../../Components/Presets';

function Puzzle6x6(){
  const [puzzle, setPuzzle] = useState(SIX1P);
  const [puzzleNum, setPuzzleNum] = useState(1);
  const gridRef = useRef(null);

  function UpdatePuzzle(n){
    switch(n){
      case 1: setPuzzle(SIX1P); break;
      case 2: setPuzzle(SIX2P); break;
      case 3: setPuzzle(SIX3P); break;
      default: setPuzzle(SIX1P);
    }
    setPuzzleNum(n);
  }

  return(
    <Container>
      <Row className='justify-content-md-center'>
        <h1>
          6x6 Puzzles
        </h1>  
        <Grid n={6} puzzle_={puzzle} ref={gridRef}/>
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

export default Puzzle6x6;