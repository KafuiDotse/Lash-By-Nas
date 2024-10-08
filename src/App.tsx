import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import OurWork from './components/OurWork/OurWork'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/our-work' element={<OurWork/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
