import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Class(props) {
    const [dndClass, setDndClass] = useState(null);

    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${id}`)
            .then(res => res.json())
            .then(res => setDndClass(res))
            .catch(console.error)
    }, [id]);

    return (
        <div>
            hello from class
        </div>
    );
}

export default Class;