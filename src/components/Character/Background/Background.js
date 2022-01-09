import React, { useState, useEffect } from 'react';

function Background(props) {
    // state to store the list of backgrounds from api
    const [background, setBackground] = useState(null);

    // useEffect to fetch backgrounds data from api
    // using different api because it has more data on this specific topic
    useEffect(() => {
        fetch(`https://api.open5e.com/backgrounds/${props.backgroundId}`)
            .then(res => res.json())
            .then(res => setBackground(res))
            .catch(console.error);
    }, [props.backgroundId]);

    return (
        <div>
            {background &&
            <>
                <h2>{background.name}</h2>
                <p>{background.desc}</p>
                <h2>Skill Proficiencies</h2>
                <p>{background.skill_proficiencies}</p>
                <h2>Language</h2>
                <p>{background.languages}</p>
                <h2>Equipment</h2>
                <p>{background.equipment}</p>
                <h2>{background.feature}</h2>
                <p>{background.feature_desc}</p>
            </>
            }
        </div>
    );
}

export default Background;