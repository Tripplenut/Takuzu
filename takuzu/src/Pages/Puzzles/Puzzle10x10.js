// React imports
import { useState, useRef } from 'react';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Component imports
import Grid from '../../Components/Grid';
import PuzzleSelector from '../../Components/PuzzleSelector';
import {TEN1P, TEN2P, TEN3P} from '../../Components/Presets';

function Puzzle10x10(){
  const [puzzle, setPuzzle] = useState(TEN1P);
  const [puzzleNum, setPuzzleNum] = useState(1);
  const gridRef = useRef(null);

  function UpdatePuzzle(n){
    switch(n){
      case 1: setPuzzle(TEN1P); break;
      case 2: setPuzzle(TEN2P); break;
      case 3: setPuzzle(TEN3P); break;
      default: setPuzzle(TEN1P);
    }
    setPuzzleNum(n);
  }

  return(
    <Container>
      <Row className='justify-content-md-center'>
        <h1 className="heading1">
          10x10 Puzzles
        </h1>  
        <Grid n={10} puzzle_={puzzle} ref={gridRef}/>
      </Row>
      <Row className="justify-content-md-center">
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

export default Puzzle10x10;