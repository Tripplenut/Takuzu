// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Component imports
import Tile from './Tile';

function Board(){
  return(
    <Container >
      <Row>
        <Col> 
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
        </Col>
      </Row>
      <Row>
        <Col> 
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
        </Col>
      </Row>
      <Row>
        <Col> 
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
        </Col>
      </Row>
      <Row>
        <Col> 
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
        </Col>
      </Row>
      <Row>
        <Col> 
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
        </Col>
      </Row>
      <Row>
        <Col> 
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
          <Tile/>
        </Col>
      </Row>
    </Container>
  );
}

export default Board;