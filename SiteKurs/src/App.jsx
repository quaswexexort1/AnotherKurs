import { Routes, Route } from "react-router-dom"

import MainPage from './Pages/MainPage/MainPage'
import AboutPage from './Pages/AboutPage/AboutPage'

import ScrollToTop from "./components/ScrollToTop"

import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App