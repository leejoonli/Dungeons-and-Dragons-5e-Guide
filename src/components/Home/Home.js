import React from 'react';
import { Link } from 'react-router-dom';
import Character from '../Character/Character';

function Home(props) {
    return (
        <>
            <nav>
                <Link to='/character'>
                        Character
                </Link>
            </nav>
        </>
    );
}

export default Home;