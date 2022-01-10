import React from 'react';
import styles from './Home.module.css';

function Home(props) {
    return (
        <div className={styles.homeContainer}>
            <h2 className={styles.header}>Welcome to the Dungeons and Dragons 5e Quick Guide</h2>
            <h3 className={styles.miniHeader}>You can navigate through the site using the navigation sidebar</h3>
            <h3 className={styles.miniHeader}>If you want to return to this page then click the "Dungeons and Dragons" header at the top of the page</h3>
            <h3 className={styles.miniHeader}>Enjoy!</h3>
        </div>
    );
}

export default Home;