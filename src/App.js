import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Character from './components/Character/Character';
import GameRulesAndMechanics from './components/GameRulesAndMechanics/GameRulesAndMechanics';

function App() {
  return (
    <main>
      <h1>
        hello world
      </h1>
      <nav>
        <Link to='/character'>Character</Link>
      </nav>
      <Routes>
        <Route path="/character" element={<Character />} />
      </Routes>
        {/* <Character /> */}
        {/* <GameRulesAndMechanics /> */}
    </main>
  );
}

export default App;