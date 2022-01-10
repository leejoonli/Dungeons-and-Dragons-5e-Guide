import React, { useState, useEffect } from 'react';
import styles from './AbilityScore.module.css';

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
                <h2 className={styles.headerTwo}>{abilityScore.full_name}</h2>
                {abilityScore.desc.map((element, index) => {
                    return (
                        <p key={`AS-${index}`} className={styles.desc}>{element}</p>
                    )
                })}
                <h3 className={styles.headerThree}>Affected Skills</h3>
                <ul className={styles.listContainer}>
                    {abilityScore.skills.map((element, index) => {
                        return (
                            <li key={`SKILL-${index}`} className={styles.listItem}>{element.name}</li>
                        )
                    })}
                </ul>
            </>
            }
        </div>
    );
}

export default AbilityScore;