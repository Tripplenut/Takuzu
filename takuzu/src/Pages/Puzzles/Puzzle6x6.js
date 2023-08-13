// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Grid from '../../Components/Grid';

function Puzzle6x6(){
    return(
    <Container className='justify-content-md-center'>
      <Row>
        <h1>
          6x6 Puzzles
        </h1>  
        <Grid></Grid>
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

export default Puzzle6x6;