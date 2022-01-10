import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Races(props) {
    // create state to hold races
    const [races, setRaces] = useState(null);
    
    // make api call to retrieve races information
    useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/races")
            .then(res => res.json())
            .then(res => setRaces(res.results))
            .catch(console.error);
    }, []);

    return (
        <div>
            {races && races.map((element, index) => {
                return (
                    <div key={`${element.index}-${index}`}>
                        <Link to={`/character/races/${element.index}`}>
                            {element.name}
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default Races;