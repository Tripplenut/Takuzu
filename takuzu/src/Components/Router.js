// React Imports
import {Routes, Route} from 'react-router-dom';

// Page Imports
import Home from '../Pages/Home'
import About from '../Pages/About'
import Tutorial from '../Pages/Tutorial'
import Settings from '../Pages/Settings'
import Puzzle6x6 from '../Pages/Puzzles/Puzzle6x6'
import Puzzle8x8 from '../Pages/Puzzles/Puzzle8x8'
import Puzzle10x10 from '../Pages/Puzzles/Puzzle10x10'
import Puzzle12x12 from '../Pages/Puzzles/Puzzle12x12'

function Router(){
  return (
    <Routes>
      {/*Main Pages*/}
      <Route path='/' Component={Home}/>
      <Route path='/tutorial' Component={Tutorial}/>
      <Route path='/about' Component={About}/>

      {/*Puzzle Pages*/}
      <Route path='/settings' Component={Settings}/>
      <Route path='/6x6puzzle' Component={Puzzle6x6}/>
      <Route path='/8x8puzzle' Component={Puzzle8x8}/>
      <Route path='/10x10puzzle' Component={Puzzle10x10}/>
      <Route path='/12x12puzzle' Component={Puzzle12x12}/>
    </Routes>
  );
}

export default Router;