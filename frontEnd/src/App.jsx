// import React from 'react'
// import { Route, Routes } from 'react-router-dom/dist'
// import Boarding from './pages/Boarding'
// import Login from './pages/Login'
// import SignUp from './pages/SignUp'

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path='/boarding' element={<Boarding/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/signup' element={<SignUp/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App









import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home"
import Games from "./pages/Game";
import Sessions from "./pages/Sessions"
import Stats from  "./pages/Stats"
import Profile from "./pages/Profile"



function App() {
  return (
    <>
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      <Sidebar />
    </>
  );
}

export default App;
