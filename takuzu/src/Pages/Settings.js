// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Settings(){
  return(
    <Container className='justify-content-md-center'>
      <Row>
        {/*Main Content*/}
        <h1 className='heading1'>Settings</h1>
      </Row>
      <Row>
        {/*Footer*/}
        This will be a footer (eventually)
      </Row>
    </Container>
  );
}

export default Settings;