// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Grid from '../Components/Grid';


function TestPuzzle(){
    return(
    <Container className='justify-content-md-center'>
      <Row> 
        Puzzle Goes here
      </Row>
      <Grid></Grid>
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