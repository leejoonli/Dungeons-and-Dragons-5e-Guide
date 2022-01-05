import React, { useState, useEffect } from 'react';

function Character(props) {
    // create state for classes, races, and stats
    const [classes, setClasses] = useState(null);
    const [races, setRaces] = useState(null);
    const [stats, setStats] = useState(null);

    useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/classes")
            .then(res => res.json())
            .then(res => setClasses(res.results))
            .catch(console.error);
    }, []);

    return (
        <div>
            Classes
            <div>
                {(classes === null) ? null : classes.map((element, index) => {
                    return (
                        <div key={`${element.index}-${index}`}>
                            {element.name}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Character;