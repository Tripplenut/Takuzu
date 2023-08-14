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
          <NavLink to='/6x6puzzle' className='dropdown-item'>
            6x6 Puzzles
          </NavLink>
          <NavLink to='/8x8puzzle' className='dropdown-item'>
            8x8 Puzzles
          </NavLink>
          <NavLink to='/10x10puzzle' className='dropdown-item'>
            10x10 Puzzles
          </NavLink>
          <NavLink to='/12x12puzzle' className='dropdown-item'>
            12x12 Puzzles
          </NavLink>
        </NavDropdown>
        <NavLink to='/tutorial' className='nav-link'> Tutorial </NavLink>
        <NavLink to='/about' className='nav-link'> About </NavLink>
        <NavLink to='/settings' className='nav-link'> Settings </NavLink>
      </Nav>
    </NavBar>
  );
}

export default NavigationBar; 