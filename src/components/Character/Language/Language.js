import React, { useState, useEffect } from 'react';
import styles from './Language.module.css';

function Language(props) {
    // state to store data from api
    const [language, setLanguage] = useState(null);

    // useEffect to fetch data from api
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/languages/${props.languageId}`)
            .then(res => res.json())
            .then(res => setLanguage(res))
            .catch(console.error);
    }, [props.languageId]);

    return (
        <>
            {language &&
            <>
                {language.typical_speakers.map((element, index) => {
                    return (
                        <div key={`${element.index}-${index}`}>
                            <h4 className={styles.speakers}>Typical Speakers:</h4>
                            <p className={styles.desc}>{element}</p>
                        </div>
                    )
                })}
                <h4 className={styles.headerFour}>Type:</h4>
                <p className={styles.desc}>{language.type}</p>
            </>
            }
        </>
    );
}

export default Language;