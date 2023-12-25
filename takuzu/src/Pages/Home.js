// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Home(){
  return(
    <Container className='justify-content-md-center'>
      <Row>
        <h1 className="heading1">
          <br></br>
          WELCOME TO<br></br>
          <img src={process.env.PUBLIC_URL + '/namelogo.png'} width="500" height="150" alt="Logo"></img>
        </h1>
        <p id="p1">Choose a puzzle from the bar on top!</p>
      </Row>
      <Row id="rules">
        <div style={{fontSize: "25px", color: "white"}}>
          Rules:
          <ul>
            <li>Fill the grid with 1's and 0's</li>
            <li>Max 2 of same # can be adjacent in row/col</li>
            <li>No identical rows or columns.</li>
            <li>Same # of 0s and 1s in each row/column</li>
          </ul>
        </div>
      </Row>
      <Row>
        <a style={{margin: '20px', textAlign: 'center'}} href="https://www.textstudio.com/" target="_blank">Logo Credit</a>
      </Row>
    </Container>
  );
}

export default Home;