import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamPage from './pages/TeamPage';
import MatchPage from './pages/MatchPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/teams/:teamName' element={<TeamPage />} />
          <Route path='/teams/:teamName/matches/:year' element={<MatchPage />} />
          <Route path='/team' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;