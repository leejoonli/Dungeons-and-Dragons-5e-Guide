import React, { useState, useEffect } from 'react';
import Skill from '../Skill/Skill';
import styles from './Skills.module.css';

function Skills(props) {
    // state to store list of skills from api
    const [skills, setSkills] = useState(null);

    // useEffect to fetch list of skills from api
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/skills`)
            .then(res => res.json())
            .then(res => setSkills(res))
            .catch(console.error);
    }, []);

    return (
        <div className={styles.skillContainer}>
            {skills &&
            <>
                {skills.results.map((element, index) => {
                    return (
                        <div key={`${element.index}-${index}`}>
                            <Skill skillId={element.index} />
                        </div>
                    )
                })}
            </>
            }
        </div>
    );
}

export default Skills;