// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Tutorial(){
  return(
    <Container className='justify-content-md-center'>
      <Row>
        <h1 className='center-text'>
          Big tutorial tings
        </h1>
      </Row>
      <Row>
        {/*Footer*/}
        Footer Goes here or something
      </Row>
    </Container>
  );
}

export default Tutorial;