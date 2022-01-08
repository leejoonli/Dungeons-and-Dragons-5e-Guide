import React, { useState, useEffect } from 'react';

function Language(props) {
    const [language, setLanguage] = useState(null);

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
                            <h4>Typical Speakers</h4>
                            <p>{element}</p>
                        </div>
                    )
                })}
                <h4>Type</h4>
                <p>{language.type}</p>
            </>
            }
        </>
    );
}

export default Language;