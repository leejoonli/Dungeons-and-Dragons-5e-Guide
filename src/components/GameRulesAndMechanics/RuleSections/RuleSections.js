import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './RuleSections.module.css';

function RuleSections(props) {
    const [adventuringRuleSections, setadventuringRuleSections] = useState(null);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/rules/${props.ruleId}`)
            .then(res => res.json())
            .then(res => setadventuringRuleSections(res))
            .catch(console.error);
    }, [props.ruleId]);

    return (
        <div>
            {adventuringRuleSections &&
            <>
                {adventuringRuleSections.subsections.map((element, index) => {
                    return (
                        <div key={`${element.index}-${index}`} className={styles.linkContainer}>
                            <h2><Link to={`/rules-and-mechanics/adventuring/${element.index}`} className={styles.link}>{element.name}</Link></h2>
                        </div>
                    )
                })}
            </>
            }
        </div>
    );
}

export default RuleSections;