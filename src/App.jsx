import React from "react";
import { Login, Chat, Profile } from "./pages/index.js";
import  {Routes, Route} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
