import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home"
import Games from "./pages/Game";
import Sessions from "./pages/Sessions"
import Stats from  "./pages/Stats"
import Profile from "./pages/Profile"



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
