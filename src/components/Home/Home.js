import React from 'react';
import { Link } from 'react-router-dom';
import Character from '../Character/Character';

function Home(props) {
    return (
        <>
            <nav>
                <h2><Link to='/character'>Character</Link></h2>
                <h2><Link to='/rules-and-mechanics'>Game Rules and Mechanics</Link></h2>
            </nav>
        </>
    );
}

export default Home;