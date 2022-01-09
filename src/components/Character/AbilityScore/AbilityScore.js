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
            hello world
        </div>
    );
}

export default AbilityScore;