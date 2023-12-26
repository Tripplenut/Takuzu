// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function About(){
  return(
    <Container className='justify-content-md-center'>
      <Row style={{paddingTop: '20px'}}>
        {/*Main Content*/}
        <h1 className='heading1'>About The Devs</h1>
      </Row>
      <Row>
        <div style={{width: '375px', margin: '0 auto', marginTop: '10px', textAlign: 'center'}}>
          <img src={process.env.PUBLIC_URL + '/ravva.jpg'} width='375px' height='427.5px' alt="ravva"></img>
          <p style={{fontFamily: 'Nunito'}}>Hey I'm Srivaths! I'm a sophomore at 
            <i> Stony Brook University</i>. I double-major in <i>Honors Computer Science </i> 
            and <i>Applied Mathematics</i>. With my software skills, I aim to work in 
            either <i>Data Science or Cybersecurity</i>.</p>
          <a href="https://github.com/daPots" target="_blank" >
            <img style={{marginRight: '20px'}} src={process.env.PUBLIC_URL + '/github.png'} width='50px' height='50px' alt="github"></img>
          </a>
          <a href="https://www.linkedin.com/in/srivaths-ravva/" target="_blank">
            <img style={{marginLeft: '20px'}} src={process.env.PUBLIC_URL + '/linkedin.png'} width='50px' height='50px' alt="linkedin"></img>
          </a>

        </div>
        <div id='line'/>
        <div style={{width: '427.4px', margin: '0 auto', marginTop: '10px', textAlign: 'center'}}>
          <img src={process.env.PUBLIC_URL + '/fabius.jpeg'} width='427.5px' height='427.5px' alt="fabius"></img>
          <p style={{fontFamily: 'Nunito'}}></p>
          <a href="https://github.com/Tripplenut" target="_blank">
            <img style={{marginRight: '20px'}} src={process.env.PUBLIC_URL + '/github.png'} width='50px' height='50px' alt="github"></img>
          </a>
          <a href="https://www.linkedin.com/in/anthony-fabius/" target="_blank">
            <img style={{marginLeft: '20px'}} src={process.env.PUBLIC_URL + '/linkedin.png'} width='50px' height='50px' alt="linkedin"></img>
          </a>
        </div>
      </Row>
    </Container>
  );
}

export default About;