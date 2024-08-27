import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './app/landingpage';
import AppPage from './app/AppPage';
import IntroFormPage from './app/components/app-home/IntroFormPage';
import MatchPage from './app/components/app-home/MatchPage';
import IcebreakingPage from './app/components/app-home/IceBreakingPage';
import Login from './app/components/auth/login/page'; 
import PrivateRoute from './app/components/PrivateRoute'; 
import Register from './app/components/auth/register/page';
import ForgetPassword from './app/components/auth/forgot-password/page';
import ResetPassword from './app/components/auth/reset-password/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgetPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />

        {/* Protected routes */}
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <AppPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/introduction"
          element={
            <PrivateRoute>
              <IntroFormPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/match"
          element={
            <PrivateRoute>
              <MatchPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/icebreaking"
          element={
            <PrivateRoute>
              <IcebreakingPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
