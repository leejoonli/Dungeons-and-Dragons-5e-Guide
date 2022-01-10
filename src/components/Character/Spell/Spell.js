import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Spell(props) {
    // state to hold spell information from api
    const [spell, setSpell] = useState(null);

    // useParams to hold spell id
    const { id } = useParams();

    // useEffect to fetch spell information from api
    useEffect(() => {
        fetch(`https://api.open5e.com/spells/${id}`)
            .then(res => res.json())
            .then(res => setSpell(res))
            .catch(console.error);
    }, [id]);

    return (
        <div>
            {spell &&
            <>
                <h3>{spell.name}</h3>
                {spell.level === 'Cantrip' ? <p>{spell.school} {spell.level} {spell.ritual === 'yes' && <>(Ritual)</>}</p> : <p>{spell.level} {spell.school} {spell.ritual === 'yes' && <>(Ritual)</>}</p>}
                <h4>Casting Time: {spell.casting_time}</h4>
                <h4>Range: {spell.range}</h4>
                <h4>Components: {spell.components} {spell.material && <>({spell.material})</>}</h4>
                <h4>Duration: {spell.duration}</h4>
                <p>{spell.desc}</p>
            </>
            }
        </div>
    );
}

export default Spell;