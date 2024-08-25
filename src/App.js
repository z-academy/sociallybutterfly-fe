import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './landingpage';
import AppPage from './AppPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </Router>
  );
}

export default App;
