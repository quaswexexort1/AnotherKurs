import { Routes, Route } from 'react-router-dom'

import MainPage from './Pages/MainPage/MainPage'
import AboutPage from './Pages/AboutPage/AboutPage'
import './App.css'

function App() {

  return(
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>

  );
}

export default App
