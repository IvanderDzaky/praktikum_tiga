import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SoalDuwa from './pages/SoalDuwa'
import SoalSatu from './pages/SoalSatu'

function App() {
  return (
    <Routes>
      <Route path='/' element={<SoalSatu />} />
      <Route path='/soal2' element={<SoalDuwa />} />
    </Routes>
  )
}

export default App