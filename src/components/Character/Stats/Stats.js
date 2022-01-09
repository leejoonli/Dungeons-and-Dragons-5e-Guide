import React from 'react';
import { Link } from 'react-router-dom';

function Stats(props) {
    return (
        <div>
            <h2><Link to="/character/stats/ability-scores">Ability Scores</Link></h2>
            <h2><Link to="/character/stats/alignments">Alignment</Link></h2>
            <h2><Link to="/character/stats/backgrounds">Backgrounds</Link></h2>
            <h2><Link to="/character/stats/Skills">Skills</Link></h2>
        </div>
    );
}

export default Stats;