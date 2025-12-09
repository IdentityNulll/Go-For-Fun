import React from 'react'
import {Routes, Route} from "react-router-dom"
import Boarding from './pages/Boarding'

function App() {
  return (
    <div>
      <Routes>
        <Route path='boarding' element={<Boarding/>} />
      </Routes>

    </div>
  )
}

export default App