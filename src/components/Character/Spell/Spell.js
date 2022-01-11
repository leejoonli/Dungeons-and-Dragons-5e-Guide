import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Spell.module.css';

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
        <div className={styles.spellContainer}>
            {spell &&
            <>
                <h3 className={styles.spellHeader}>{spell.name}</h3>
                {spell.level === 'Cantrip' ? <p className={styles.desc}>{spell.school} {spell.level} {spell.ritual === 'yes' && <>(Ritual)</>}</p> : <p className={styles.desc}>{spell.level} {spell.school} {spell.ritual === 'yes' && <>(Ritual)</>}</p>}
                <h4 className={styles.miniHeader}>Casting Time: {spell.casting_time}</h4>
                <h4 className={styles.miniHeader}>Range: {spell.range}</h4>
                <h4 className={styles.miniHeader}>Components: {spell.components} {spell.material && <>({spell.material})</>}</h4>
                <h4 className={styles.miniHeader}>Duration: {spell.duration}</h4>
                <p className={styles.desc}>{spell.desc}</p>
            </>
            }
        </div>
    );
}

export default Spell;