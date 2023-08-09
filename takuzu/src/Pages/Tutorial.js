// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Component imports
import NavigationBar from '../Components/Navbar'

function Tutorial(){
  return(
    <Container className='justify-content-md-center'>
      <Row >
        <NavigationBar/>
      </Row>
      <Row>
        Tutorial goes here
      </Row>
      <Row>
        {/*Footer*/}
        This is another Row
      </Row>
    </Container>
  );
}

export default Tutorial;