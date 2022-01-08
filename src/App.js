import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home/Home';
import Character from './components/Character/Character';
import Classes from './components/Character/Classes';
import Class from './components/Character/Class/Class';
import Races from './components/Character/Races/Races';
import GameRulesAndMechanics from './components/GameRulesAndMechanics/GameRulesAndMechanics';

function App() {
  return (
    <main>
      <h1>
        <Link to="/">
          Home
        </Link>
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/character/classes" element={<Classes />} />
        <Route path="/character/classes/:id" element={<Class />} />
        <Route path="/races" element={<Races />} />
      </Routes>
      {/* <GameRulesAndMechanics /> */}
    </main>
  );
}

export default App;