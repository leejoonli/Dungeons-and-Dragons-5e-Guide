import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Character.module.css';

function Character(props) {
    return (
        <div className={styles.subNavBar}>
            <h2><Link to="/character/classes">Classes</Link></h2>
            <h2><Link to='/character/races'>Races</Link></h2>
            <h2><Link to='/character/stats'>Character Statistics</Link></h2>
            <h2><Link to='/character/spells'>Spells</Link></h2>
        </div>
    );
}

export default Character;