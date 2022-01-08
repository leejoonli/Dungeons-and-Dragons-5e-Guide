import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Race(props) {
    // state to hold api information
    const [race, setRace] = useState(null);

    // useParams to get id from url
    const { id } = useParams();

    // useEffect to fetch api information
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/races/${id}`)
            .then(res => res.json())
            .then(res => setRace(res))
            .catch(console.error);
    }, [id]);

    return (
        <div>
            {race &&
            <>
                <h1>{race.name}</h1>
                <h2>Age</h2>
                <p>{race.age}</p>
                <h2>Size</h2>
                <p>{race.size}</p>
                <h3>Size Description</h3>
                <p>{race.size_description}</p>
                <h2>Language</h2>
                <p>{race.language_desc}</p>
                <h2>Alignment</h2>
                <p>{race.alignment}</p>
            </>
            }
        </div>
    );
}

export default Race;