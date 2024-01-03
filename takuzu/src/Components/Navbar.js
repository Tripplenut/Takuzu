// React imports
import {NavLink} from 'react-router-dom'
import { useState, createContext } from 'react'
import music from '../music.wav'

// Bootstrap imports
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Toggle from './Toggle'

export const ThemeContext = createContext(null);

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

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
      <NavBar id={theme}>
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
          <NavLink to='/tutorial' className='nav-link'> Tutorial </NavLink>
          <NavLink to='/account' className='nav-link'> Account </NavLink>
          <NavLink to='/about' className='nav-link'> About </NavLink>
          <Toggle label=" " onToggle={toggleTheme}/>
          <button id='sound' onClick={playPause}>{playing ? '\u23f8' : '\u266B'}</button>
        </Nav>
      </NavBar>
    </ThemeContext.Provider>
  );
}
//263C for sun, 263D for moon, 2699 for gear
export default NavigationBar; 