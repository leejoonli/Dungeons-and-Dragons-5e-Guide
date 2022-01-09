import React, { useState, useEffect } from 'react';

function Feature(props) {
    // state to store api data
    const [feature, setFeatures] = useState(null);

    // useEffect to fetch data from api
    useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/features/${props.feature}`)
        .then(res => res.json())
        .then(res => setFeatures(res))
        .catch(console.error)
    }, [props.feature]);

    return (
        <p>
            {feature &&
            <>
                {feature.desc}
            </>
            }
        </p>
    );
}

export default Feature;