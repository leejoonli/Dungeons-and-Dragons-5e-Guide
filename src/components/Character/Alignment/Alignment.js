import React, { useState, useEffect } from 'react';

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
                <h2>{alignment.name}</h2>
                <p>{alignment.desc}</p>
            </>
            }
        </>
    );
}

export default Alignment;