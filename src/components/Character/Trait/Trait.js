import React, { useState, useEffect } from 'react';

function Trait(props) {
    const [trait, setTrait] = useState(null);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/traits/${props.traitId}`)
            .then(res => res.json())
            .then(res => setTrait(res))
            .catch(console.error);
    }, [props.traitId]);

    return (
        <>
            {trait &&
            <>
                <h4>{trait.name}</h4>
                {trait.desc.map((element, index) => {
                    return (
                        <p key={`${index}`}>{element}</p>
                    )
                })}
            </>
            }
        </>
    );
}

export default Trait;