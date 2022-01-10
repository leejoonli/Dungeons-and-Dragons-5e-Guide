import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GameRulesAndMechanics(props) {
    const [appendix, setAppendix] = useState(null);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/rules/appendix`)
            .then(res => res.json())
            .then(res => setAppendix(res))
            .catch(console.error);
    }, []);

    return (
        <div>
            {appendix &&
            <>
                <h2>{appendix.name}</h2>
                {appendix.subsections.map((element, index) => {
                    return (
                        <h3 key={`${element.index}-${index}`}><Link to={`/rules-and-mechanics${element.index}`}>{element.name}</Link></h3>
                    )
                })}
            </>
            }
        </div>
    );
}

export default GameRulesAndMechanics;