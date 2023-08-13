// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Puzzle12x12(){
    return(
    <Container className='justify-content-md-center'>
      <Row>
        <h1>
          12x12 Puzzles
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

export default Puzzle12x12;