import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Character(props) {
    return (
        <div>
            <h2><Link to="/character/classes">Classes</Link></h2>
            <h2><Link to='/character/races'>Races</Link></h2>
            <h2><Link to='/character/stats'>Character Statistics</Link></h2>
            <h2><Link to='/character/spells'>Spells</Link></h2>
        </div>
    );
}

export default Character;