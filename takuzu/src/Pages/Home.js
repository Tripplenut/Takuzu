// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Component imports
import NavigationBar from '../Components/Navbar'

function Home(){
  return(
    <Container className='justify-content-md-center'>
      <Row >
        <Col></Col>
        <Col xxl={8}>
        <NavigationBar/>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        {/*Grid Board*/}
        This is a Row
      </Row>
      <Row>
        {/*Footer*/}
        This is another Row
      </Row>
    </Container>
  );
}

export default Home;