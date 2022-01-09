import React from 'react';
import { Link } from 'react-router-dom';

function Character(props) {
    return (
        <div>
            <h2><Link to="/character/spells/spell-list-by-class">Spell List by Class</Link></h2>
            <h2><Link to='/character/spells/spell-list'>Spell List</Link></h2>
        </div>
    );
}

export default Character;