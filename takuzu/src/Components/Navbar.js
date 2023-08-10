// React imports
import {NavLink} from 'react-router-dom'

// Bootstrap imports
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavigationBar(){
  return(
    <NavBar bg='primary'>
      <div className='ms-4'>
      <NavLink to='/' className='nav-link'>
        <NavBar.Brand>
          Takuzu
        </NavBar.Brand>
      </NavLink>
      </div>
      <Nav>
        <NavDropdown title='Puzzles'>
          <NavLink to='/TestPuzzle'>
            <NavDropdown.Item>6x6</NavDropdown.Item>
          </NavLink>
          <NavDropdown.Item href='#8x8'>8x8</NavDropdown.Item>
          <NavDropdown.Item href='#10x10'>10x10</NavDropdown.Item>
          <NavDropdown.Item href='#12x12'>12x12</NavDropdown.Item>
        </NavDropdown>
        <NavLink to='/tutorial' className='nav-link'> Tutorial </NavLink>
        <NavLink to='/about' className='nav-link'> About </NavLink>
      </Nav>
    </NavBar>
  );
}

export default NavigationBar; 