import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Character(props) {
    // create state for classes, races, and stats
    const [races, setRaces] = useState(null);
    const [stats, setStats] = useState(null);

    // useEffect for API call, currently for testing purposes
    // useEffect(() => {
    //     fetch("https://www.dnd5eapi.co/api/classes")
    //         .then(res => res.json())
    //         .then(res => setClasses(res.results))
    //         .catch(console.error);
        
    //     fetch("https://www.dnd5eapi.co/api/races")
    //         .then(res => res.json())
    //         .then(res => setRaces(res.results))
    //         .catch(console.error);
    // }, []);

    return (
        <div>
            <h2><Link to="/character/classes">Classes</Link></h2>
            {/* <h2>Race</h2> */}
            {/* <div>
                {(races === null) ? null : races.map((element, index) => {
                    return (
                        <div key={`${element.index}-${index}`}>
                            {element.name}
                        </div>
                    )
                })}
            </div> */}
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