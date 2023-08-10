// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Home(){
  return(
    <Container className='justify-content-md-center'>
      <Row>
        <h1>
          Welcome to the homepage
        </h1>
      </Row>
      <Row>
        Footer goes here
      </Row>
    </Container>
  );
}

export default Home;