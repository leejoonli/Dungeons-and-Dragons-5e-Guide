import React, { useState, useEffect } from 'react';

function Skill(props) {
    // state to store list of skills from api
    const [skill, setSkill] = useState(null);

    // useEffect to fetch list of skills from api
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/skills/${props.skillId}`)
            .then(res => res.json())
            .then(res => setSkill(res))
            .catch(console.error);
    }, [props.skillId]);

    return (
        <div>
            {skill &&
            <>
                <h2>{skill.name} - {skill.ability_score.name}</h2>
                <p>{skill.desc[0]}</p>
            </>
            }
        </div>
    );
}

export default Skill;