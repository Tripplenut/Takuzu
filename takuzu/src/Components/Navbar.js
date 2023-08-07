// Bootstrap imports
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavigationBar(){
  return(
    <NavBar>
      <Container>
        <NavBar.Brand href='#Home'> Takuzu </NavBar.Brand>
        <Nav>
          <Nav.Link href='#Puzzles'> Puzzles </Nav.Link> {/* Make this a drop down*/}
          <Nav.Link href='#Tutorial'> Tutorial </Nav.Link>
          <Nav.Link href='#About'> About </Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  );
}

export default NavigationBar; 