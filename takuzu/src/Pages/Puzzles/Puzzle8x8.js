// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Puzzle8x8(){
    return(
    <Container className='justify-content-md-center'>
      <Row>
        <h1>
          8x8 Puzzles
        </h1>
        {/*Grid Board*/}
        Grid Board goes here
      </Row>
      <Row>
        {/*mmm code*/}
        Puzzle Selector or something
      </Row>
      <Row>
        {/*Footer*/}
        This will be a footer
      </Row>
    </Container>
    );
}

export default Puzzle8x8;