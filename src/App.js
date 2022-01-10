import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home/Home';
import Character from './components/Character/Character';
import Classes from './components/Character/Classes/Classes';
import Class from './components/Character/Class/Class';
import Races from './components/Character/Races/Races';
import Race from './components/Character/Race/Race';
import Stats from './components/Character/Stats/Stats';
import AbilityScores from './components/Character/AbilityScores/AbilityScores';
import Alignments from './components/Character/Alignments/Alignments';
import Backgrounds from './components/Character/Backgrounds/Backgrounds';
import Skills from './components/Character/Skills/Skills';
import SpellLists from './components/Character/SpellLists/SpellLists';
import SpellList from './components/Character/SpellList/SpellList';
import ClassSpellLists from './components/Character/ClassSpellLists/ClassSpellLists';
import Spell from './components/Character/Spell/Spell';
import GameRulesAndMechanics from './components/GameRulesAndMechanics/GameRulesAndMechanics';
import RuleSections from './components/GameRulesAndMechanics/RuleSections/RuleSections';
import Rule from './components/GameRulesAndMechanics/Rule/Rule';

function App() {
  return (
    <main>
      <h1><Link to="/">Home</Link></h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Character />} />
        <Route path="/character/classes" element={<Classes />} />
        <Route path="/character/classes/:id" element={<Class />} />
        <Route path="/character/races" element={<Races />} />
        <Route path="/character/races/:id" element={<Race />} />
        <Route path="/character/stats" element={<Stats />} />
        <Route path="/character/stats/ability-scores" element={<AbilityScores />} />
        <Route path="/character/stats/alignments" element={<Alignments />} />
        <Route path="/character/stats/backgrounds" element={<Backgrounds />} />
        <Route path="/character/stats/skills" element={<Skills />} />
        <Route path="/character/spells" element={<SpellLists />} />
        <Route path="/character/spells/spell-list" element={<SpellList />} />
        <Route path="/character/spells/spell-list-by-class" element={<ClassSpellLists />} />
        <Route path="/character/spells/:id" element={<Spell />} />
        <Route path="/rules-and-mechanics" element={<GameRulesAndMechanics />} />
        <Route path="/rules-and-mechanics/:id" element={<RuleSections />} />
        <Route path="/rules-and-mechanics/:id/:type" element={<Rule />} />
      </Routes>
    </main>
  );
}

export default App;