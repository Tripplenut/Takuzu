// React imports
import { useState, useRef } from 'react';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Component imports
import Grid from '../../Components/Grid';
import PuzzleSelector from '../../Components/PuzzleSelector';
import {SBS1P, SBS2P, SBS3P} from '../../Components/Presets';

function Puzzle6x6(){
  const [puzzle, setPuzzle] = useState(SBS1P);
  const [puzzleNum, setPuzzleNum] = useState(1);
  const gridRef = useRef(null);

  function UpdatePuzzle(n){
    switch(n){
      case 1: setPuzzle(SBS1P); break;
      case 2: setPuzzle(SBS2P); break;
      case 3: setPuzzle(SBS3P); break;
      default: setPuzzle(SBS1P);
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