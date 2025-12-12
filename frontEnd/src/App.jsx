import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Boarding from "./pages/Boarding";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const [isAllowed, setIsAllowed] = useState(window.innerWidth >= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsAllowed(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isAllowed) {
    return (
      <div className="text-[25px] text-center flex items-center justify-center h-[100px]">
        Screen too small. Please use a device with at least 600px width.
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Boarding />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;