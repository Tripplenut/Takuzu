// React Imports
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../Pages/Contexts/AuthContext';

// Page Imports
import Home from '../Pages/Home'
import About from '../Pages/About'
import Tutorial from '../Pages/Tutorial'
import Account from '../Pages/Account'
import Signup from '../Pages/Forms/Signup'
import Login from '../Pages/Forms/Login'
import PrivateRoute from '../PrivateRoute'
import ForgotPassword from '../Pages/Forms/ForgotPassword'
import Puzzle6x6 from '../Pages/Puzzles/Puzzle6x6'
import Puzzle8x8 from '../Pages/Puzzles/Puzzle8x8'
import Puzzle10x10 from '../Pages/Puzzles/Puzzle10x10'
import Puzzle12x12 from '../Pages/Puzzles/Puzzle12x12'

function Router(){
  return (
    <AuthProvider>
      <Routes>
        {/*Main Pages*/}
        <Route path='/' Component={Home}/>
        <Route path='/tutorial' Component={Tutorial}/>
        <Route path='/about' Component={About}/>

        {/*Account Pages*/}
        <Route path='/account/signup' Component={Signup}/>
        <Route path='/account/login' Component={Login}/> 
        <Route path="/account" element={<PrivateRoute><Account/></PrivateRoute>}/>
        <Route path='/account/forgot-password' Component={ForgotPassword}/>

        {/*Puzzle Pages*/}
        <Route path='/6x6puzzle' Component={Puzzle6x6}/>
        <Route path='/8x8puzzle' Component={Puzzle8x8}/>
        <Route path='/10x10puzzle' Component={Puzzle10x10}/>
        <Route path='/12x12puzzle' Component={Puzzle12x12}/>

      </Routes>
    </AuthProvider>
  );
}

export default Router;