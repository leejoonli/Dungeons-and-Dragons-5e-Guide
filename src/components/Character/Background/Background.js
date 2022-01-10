import React, { useState, useEffect } from 'react';
import styles from './Background.module.css';

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
                <h2 className={styles.headerTwo}>{background.name}</h2>
                <p className={styles.desc}>{background.desc}</p>
                <h3 className={styles.headerThree}>Skill Proficiencies</h3>
                <p className={styles.desc}>{background.skill_proficiencies}</p>
                <h3 className={styles.headerThree}>Language</h3>
                <p className={styles.desc}>{background.languages}</p>
                <h3 className={styles.headerThree}>Equipment</h3>
                <p className={styles.desc}>{background.equipment}</p>
                <h3 className={styles.headerThree}>{background.feature}</h3>
                <p className={styles.desc}>{background.feature_desc}</p>
            </>
            }
        </div>
    );
}

export default Background;