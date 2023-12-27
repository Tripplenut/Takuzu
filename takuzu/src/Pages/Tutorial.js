// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TutorialGrid from '../Components/TutorialGrid';
import {EXP1} from '../Components/Presets';


function Tutorial(){
  return(
    <Container className='justify-content-md-center'>
      <Row>
        <h1 className='heading1'>Tutorial</h1>
      </Row>
        <TutorialGrid rows={4} cols={4} puzzle={EXP1}/>
      <Row>
      </Row>
      <Row>
        {/*Footer*/}
        Footer Goes here or something
      </Row>
    </Container>
  );
}

export default Tutorial;