// React imports
// import {Route} from 'react-router-dom'

// Bootstrap imports
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavigationBar(){
  return(
    <NavBar bg='primary'>
      <div className='ms-4'>
      <NavBar.Brand> Takuzu </NavBar.Brand>
      </div>
      <Nav>
        <NavDropdown title='Puzzles'>
          <NavDropdown.Item href='#6x6'>6x6</NavDropdown.Item>
          <NavDropdown.Item href='#8x8'>8x8</NavDropdown.Item>
          <NavDropdown.Item href='#10x10'>10x10</NavDropdown.Item>
          <NavDropdown.Item href='#12x12'>12x12</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href='#Tutorial'> Tutorial </Nav.Link>
        <Nav.Link href='#About'> About </Nav.Link>
      </Nav>
    </NavBar>
  );
}

export default NavigationBar; 