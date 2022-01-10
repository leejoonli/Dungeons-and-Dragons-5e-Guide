import React, { useState, useEffect } from 'react';
import styles from './Alignment.module.css';

function Alignment(props) {
    // state to hold alignment data from api
    const [alignment, setAlignment] = useState(null);

    // useEffect to fetch alignment data from api
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/alignments/${props.alignmentId}`)
            .then(res => res.json())
            .then(res => setAlignment(res))
            .catch(console.error);
    }, [props.alignmentId]);

    return (
        <>
            {alignment &&
            <>
                <h2 className={styles.headerTwo}>{alignment.name}</h2>
                <p className={styles.desc}>{alignment.desc}</p>
            </>
            }
        </>
    );
}

export default Alignment;