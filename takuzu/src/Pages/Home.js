import { Container, Row } from 'react-bootstrap';
import './Pages.css';

function Home(){
  return(
    <Container className='justify-content-md-center'>
      <Row>
        <h1 className="heading1">
          <br></br>WELCOME TO<br></br>
          <img src={process.env.PUBLIC_URL + '/namelogo.png'} width="500" height="150" alt="Logo"></img>
        </h1>
        <p id="p1">Choose a puzzle from the bar on top!</p>
      </Row>
      <Row id="rules">
        <div>
          Rules:
          <ul>
            <li>Fill the grid with 1's and 0's</li>
            <li>Max 2 of same <span className='numChar'>#</span> can be adjacent in row/col</li>
            <li>No identical rows or columns.</li>
            <li>Same <span className='numChar'>#</span> of 0's and 1's in each row/column</li>
          </ul>
        </div>
      </Row>
      <Row>
        <a style={{margin: '20px', textAlign: 'center', width: '110px'}} rel="noreferrer" href="https://www.textstudio.com/" target="_blank">Logo Credit</a>
      </Row>
    </Container>
  );
}

export default Home;