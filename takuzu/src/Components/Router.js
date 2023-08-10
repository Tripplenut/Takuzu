// React Imports
import {Routes, Route} from 'react-router-dom';

// Page Imports
import Home from '../Pages/Home'
import About from '../Pages/About'
import TestPuzzle from '../Pages/TestPuzzle'
import Tutorial from '../Pages/Tutorial'

function Router(){
  return (
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/tutorial' Component={Tutorial}/>
      <Route path='/about' Component={About}/>
      <Route path='/testpuzzle' Component={TestPuzzle}/>
    </Routes>
  );
}

export default Router;