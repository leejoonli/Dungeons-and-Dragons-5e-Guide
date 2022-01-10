import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GameRulesAndMechanics(props) {
    const [ruleSections, setRuleSections] = useState(null);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/rules/`)
            .then(res => res.json())
            .then(res => setRuleSections(res))
            .catch(console.error);
    }, []);

    return (
        <div>
            {ruleSections &&
            <>
                {ruleSections.results.map((element, index) => {
                    return (
                        <div key={`${element.index}-${index}`}>
                            <h2><Link to={`/rules-and-mechanics/${element.index}`}>{element.name}</Link></h2>
                        </div>
                    )
                })}
            </>
            }
        </div>
    );
}

export default GameRulesAndMechanics;