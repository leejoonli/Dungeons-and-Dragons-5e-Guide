import React, { useState, useEffect } from 'react';
import AbilityScore from '../AbilityScore/AbilityScore';

function AbilityScores(props) {
    // state to store ability scores
    const [abilityScores, setAbilityScores] = useState(null);

    // useEffect to get information from api
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/ability-scores/`)
            .then(res => res.json())
            .then(res => setAbilityScores(res))
            .catch(console.error);
    }, []);

    return (
        <div>
            {abilityScores &&
            <>
                {abilityScores.results.map((element, index) => {
                    return (
                        <div key={`${element.index}-${index}`}>
                            <AbilityScore abilityScoreId={element.index} />
                        </div>
                    )
                })}
            </>
            }
        </div>
    );
}

export default AbilityScores;