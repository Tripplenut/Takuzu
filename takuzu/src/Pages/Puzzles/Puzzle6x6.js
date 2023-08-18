// React imports
import { useState, useRef } from 'react';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Component imports
import Grid from '../../Components/Grid';
import PuzzleSelector from '../../Components/PuzzleSelector';
import {SBS0P, SBS1P} from '../../Components/Presets';

function Puzzle6x6(){
  const [puzzle, setPuzzle] = useState(SBS0P);
  const [temp, setTemp] = useState(0);
  const gridRef = useRef(null);

  function UpdatePuzzle(n){
    switch(n){
      case 1: setPuzzle(SBS0P); break;
      case 2: setPuzzle(SBS1P); break;
    }
    
    setTemp(n);
  }

  return(
  <Container className='justify-content-md-center'>
    <Row className='justify-content-md-center'>
      <h1>
        6x6 Puzzles - the current puzzle is {temp}
      </h1>  
      <Grid n={6} puzzle_={puzzle} ref={gridRef}/>
    </Row>
    <Row className='justify-content-md-center'>
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