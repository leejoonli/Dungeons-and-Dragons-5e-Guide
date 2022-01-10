import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home(props) {
    return (
        <div>
            <nav>
                <h2><Link to='/character'>Character</Link></h2>
                <h2><Link to='/rules-and-mechanics'>Game Rules and Mechanics</Link></h2>
            </nav>
        </div>
    );
}

export default Home;