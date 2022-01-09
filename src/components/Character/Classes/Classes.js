import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Class(props) {
    // create state to hold classes
    const [classes, setClasses] = useState(null);
    
    // make api call to retrieve classes information
    useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/classes")
            .then(res => res.json())
            .then(res => setClasses(res.results))
            .catch(console.error);
    }, []);

    return (
        <>
            {(classes === null) ? null : classes.map((element, index) => {
                return (
                    <div key={`${element.index}-${index}`}>
                        <Link to={`/character/classes/${element.index}`}>
                            {element.name}
                        </Link>
                    </div>
                )
            })}
        </>
    );
}

export default Class;