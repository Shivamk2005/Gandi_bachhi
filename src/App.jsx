import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Episode from './pages/Episode'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/episode/:id" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
