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
      <Routes>
      </Routes>
        <Character />
        <GameRulesAndMechanics />
    </main>
  );
}

export default App;