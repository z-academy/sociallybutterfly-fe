import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './app/landingpage';
import AppPage from './app/AppPage';
import IntroFormPage from './app/components/app-home/IntroFormPage';
import MatchPage from './app/components/app-home/MatchPage';
import IcebreakingPage from './app/components/app-home/IceBreakingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/introduction" element={<IntroFormPage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/icebreaking" element={<IcebreakingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
