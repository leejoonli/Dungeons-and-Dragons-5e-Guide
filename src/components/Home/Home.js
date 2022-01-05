import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Character from '../Character/Character';

function Home(props) {
    return (
        <div>
            <nav>
                <Link to='/character'>Character</Link>
            </nav>
        </div>
    );
}

export default Home;