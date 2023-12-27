// React imports
import {NavLink} from 'react-router-dom'
import { useState } from 'react'
import music from '../music.wav'

// Bootstrap imports
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Toggle from './Toggle'

function NavigationBar(){
  const [audio, setAudio] = useState(new Audio(music));
  const [playing, setPlaying] = useState(false);
  audio.loop = true;
  function playPause() {
    if(playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  }

  return(
    <NavBar>
      <div className='ms-4'>
      <NavLink to='/' className='nav-link'>
        <NavBar.Brand>
          <img src={process.env.PUBLIC_URL + '/namelogo.png'} width="100" height="30" alt="Logo"></img>
        </NavBar.Brand>
      </NavLink>
      </div>
      <Nav>
        <NavDropdown title='Puzzles' style={{color: 'black'}}>
          <NavLink to='/6x6puzzle' className='dropdown-item'>6x6 Puzzles</NavLink>
          <NavLink to='/8x8puzzle' className='dropdown-item'>8x8 Puzzles</NavLink>
          <NavLink to='/10x10puzzle' className='dropdown-item'>10x10 Puzzles</NavLink>
          <NavLink to='/12x12puzzle' className='dropdown-item'>12x12 Puzzles</NavLink>
        </NavDropdown>
        <NavLink to='/tutorial' className='nav-link' style={{color: 'black'}}> Tutorial </NavLink>
        <NavLink to='/settings' className='nav-link' style={{color: 'black'}}> Settings </NavLink>
        <NavLink to='/about' className='nav-link' style={{color: 'black'}}> About </NavLink>
        <Toggle label=" "/>
        <button id='sound' onClick={playPause}>{playing ? '\u23f8' : '\u266B'}</button>
      </Nav>
    </NavBar>
  );
}
//263C for sun, 263D for moon, 2699 for gear
export default NavigationBar; 