// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Puzzle10x10(){
    return(
    <Container className='justify-content-md-center'>
      <Row>
        <h1>
          10x10 Puzzles
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

export default Puzzle10x10;