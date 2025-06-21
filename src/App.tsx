import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Fundamentals from './pages/Fundamentals'
import Architecture from './pages/Architecture'
import BestPractices from './pages/BestPractices'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/best-practices" element={<BestPractices />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
