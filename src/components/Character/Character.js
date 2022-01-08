import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Character(props) {
    // create state for stats
    const [stats, setStats] = useState(null);

    return (
        <div>
            <h2><Link to="/character/classes">Classes</Link></h2>
            <h2><Link to='/character/races'>Races</Link></h2>
            {/* <h2>Stats</h2>
            <div>
                {(stats === null) ? null : stats.map((element, index) => {
                    return (
                        <div key={`${element.index}-${index}`}>
                            {element.name}
                        </div>
                    )
                })}
            </div> */}
        </div>
    );
}

export default Character;