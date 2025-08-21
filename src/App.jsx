import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/Welcomepage';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/Registerpage';
import SettingsPage from './pages/Settingspage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default App;