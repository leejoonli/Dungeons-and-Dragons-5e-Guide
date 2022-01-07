import React, { useState, useEffect } from 'react';

function Features(props) {
    const [features, setFeatures] = useState(null);

    useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/features/${props.features}`)
        .then(res => res.json())
        .then(res => setFeatures(res))
        .catch(console.error)
    }, [props.features]);

    return (
        <p>
            {features &&
            <>
                {features.desc}
            </>
            }
        </p>
    );
}

export default Features;