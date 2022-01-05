import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Character from '../Character/Character';

function Home(props) {
    return (
        <>
            <nav>
                <Link to='/character'>
                    <div>
                        Character
                    </div>
                </Link>
            </nav>
        </>
    );
}

export default Home;