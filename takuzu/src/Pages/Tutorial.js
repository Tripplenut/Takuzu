// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TutorialGrid from '../Components/TutorialGrid';
import {EXP1, EXP2} from '../Components/Presets';


function Tutorial(){
  return(
    <Container className='justify-content-md-center'>
      <Row>
        <h1 style={{marginTop: '20px'}} className='heading1'>Tutorial</h1>
      </Row>
          <TutorialGrid rows={4} cols={4} puzzle={EXP1}/>
          <p style={{color: 'black'}}>You can have <b>at most two</b> adjacent tiles of same color within the row or column</p>
          <p style={{color: 'black'}}>two 0's adjacent in column, two 0's adjacent in row. Valid :)</p>
          <p style={{color: 'black'}}>More than two 1's adjacent in column. Invalid :(</p>
      <Row>
      <Row>
        <TutorialGrid rows={4} cols={4} puzzle={EXP2}/>
        <p style={{color: 'black'}}>Each row and column has same # of 0's and 1's</p>
      </Row>
      </Row>
    </Container>
  );
}

export default Tutorial;