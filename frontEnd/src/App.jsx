import React from 'react'
import { Route, Routes } from 'react-router-dom/dist'
import Boarding from './pages/Boarding'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/boarding' element={<Boarding/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App