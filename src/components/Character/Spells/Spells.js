import React, { useState, useEffect } from 'react';

function Spells(props) {
    // state to store list of skills from api
    const [spells, setSpells] = useState(null);

    // useEffect to fetch list of skills from api
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/druid/spells`)
            .then(res => res.json())
            .then(res => setSpells(res))
            .catch(console.error);
    }, []);

    return (
        <div>
            {spells &&
            <>
                {spells.results.map((element, index) => {
                    return (
                        <p key={`${element.index}-${index}`}>{element.name}</p>
                    )
                })}
            </>
            }
        </div>
    );
}

export default Spells;