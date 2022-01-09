import React, { useState, useEffect } from 'react';

function AbilityScore(props) {
    // state to store ability score data
    const [abilityScore, setAbilityScore] = useState(null);

    // useEffect to fetch ability score data from api
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/ability-scores/${props.abilityScoreId}`)
            .then(res => res.json())
            .then(res => setAbilityScore(res))
            .catch(console.error);
    }, [props.abilityScoreId]);

    return (
        <div>
            {abilityScore &&
            <>
                <h2>{abilityScore.full_name}</h2>
                {abilityScore.desc.map((element, index) => {
                    return (
                        <div key={`AS-${index}`}>
                            <p>{element}</p>
                        </div>
                    )
                })}
                {abilityScore.skills.map((element, index) => {
                    return (
                        <div key={`SKILL-${index}`}>{element.name}</div>
                    )
                })}
            </>
            }
        </div>
    );
}

export default AbilityScore;