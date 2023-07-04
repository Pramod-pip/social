import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import Feed from './pages/Feed/Feed';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />} ></Route>
          <Route path="/feed" element={<Feed />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
