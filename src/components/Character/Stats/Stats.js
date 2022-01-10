import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Stats.module.css';

function Stats(props) {
    return (
        <div>
            <h2 className={styles.linkContainer}><Link to="/character/stats/ability-scores" className={styles.link}>Ability Scores</Link></h2>
            <h2 className={styles.linkContainer}><Link to="/character/stats/alignments" className={styles.link}>Alignment</Link></h2>
            <h2 className={styles.linkContainer}><Link to="/character/stats/backgrounds" className={styles.link}>Backgrounds</Link></h2>
            <h2 className={styles.linkContainer}><Link to="/character/stats/Skills" className={styles.link}>Skills</Link></h2>
        </div>
    );
}

export default Stats;