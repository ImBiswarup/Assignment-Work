import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Onboarding2 from './components/Onboarding2';
import Onboarding3 from './components/Onboarding3';
import Login from './components/Login';
import Signup from './components/Signup';
import ClockPage from './components/ClockPage';
import LoginSuccess from './components/LoginSuccess';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user)


  return (
    <div className="flex flex-col min-h-screen h-screen">
      <main className="flex-grow">
        <Routes>
          <Route exact path="https://assignment-work.vercel.app/" element={<Onboarding />} />
          <Route exact path="/onboarding2" element={<Onboarding2 />} />
          <Route exact path="/onboarding3" element={<Onboarding3 />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/track" element={<ClockPage />} />
          <Route exact path="/login-success" element={<LoginSuccess />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
