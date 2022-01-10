import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SpellLists.module.css';

function Character(props) {
    return (
        <div>
            <h2 className={styles.linkContainer}><Link to="/character/spells/spell-list-by-class" className={styles.link}>Spell List by Class</Link></h2>
            <h2 className={styles.linkContainer}><Link to='/character/spells/spell-list' className={styles.link}>Spell List</Link></h2>
        </div>
    );
}

export default Character;