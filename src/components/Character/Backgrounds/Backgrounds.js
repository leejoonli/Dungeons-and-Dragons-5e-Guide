import React, { useState, useEffect } from 'react';
import Background from '../Background/Background';

function Backgrounds(props) {
    // state to store the list of backgrounds from api
    const [backgrounds, setBackgrounds] = useState(null);

    // useEffect to fetch backgrounds data from api
    // using different api because it has more data on this specific topic
    useEffect(() => {
        fetch(`https://api.open5e.com/backgrounds/`)
            .then(res => res.json())
            .then(res => setBackgrounds(res))
            .catch(console.error);
    }, []);

    return (
        <div>
            {backgrounds &&
            <>
                {backgrounds.results.map((element, index) => {
                    return (
                        <div key={`${element.slug}-${index}`}>
                            <Background backgroundId={element.slug} />
                        </div>
                    )
                })}
            </>
            }
        </div>
    );
}

export default Backgrounds;