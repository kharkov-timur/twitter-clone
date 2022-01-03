import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from './components/Landing';
import Users from './components/Users';
import Signup from './pages/Signup';
import Login from './pages/Login';
import IsAuthenticated from './components/isAuthenticated';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/users"
        element={<IsAuthenticated children={<Users />} />}
      />
    </Routes>
  );
}

export default App;
