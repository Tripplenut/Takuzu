// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function TestPuzzle(){
    return(
    <Container className='justify-content-md-center'>
      <Row>
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

export default TestPuzzle;