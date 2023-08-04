
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Bootstraped() {
    return(
        <Container fluid>
            <Col></Col>
            <Row>
                <Col>Row 1, Column 1</Col>
                <Col>Row 1, Column 2</Col>
                <Col>Row 1, Column 3</Col>
            </Row>
            <Row>
                <Col>Row 2, Column 1</Col>
                <Col>Row 2, Column 2</Col>
                <Col>Row 2, Column 3</Col>
            </Row>
            <Row>
                <Col>Row 3, Column 1</Col>
                <Col>Row 3, Column 2</Col>
                <Col>Row 3, Column 3</Col>
            </Row>
        </Container>
    );
}

export default Bootstraped;