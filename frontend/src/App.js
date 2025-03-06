import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  </BrowserRouter>
)
export default App;
