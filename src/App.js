import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/homepage/user/:id' element={<Homepage/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;
