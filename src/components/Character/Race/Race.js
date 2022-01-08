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
            .then(res => console.log(res))
            .catch(console.error);
    }, [id]);
    
    return (
        <div>
            hello from race
        </div>
    );
}

export default Race;