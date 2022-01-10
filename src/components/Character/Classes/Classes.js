import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Classes.module.css';

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
        <div>
            {(classes === null) ? null : classes.map((element, index) => {
                return (
                    <div key={`${element.index}-${index}`} className={styles.classListContainer}>
                        <Link to={`/character/classes/${element.index}`}>
                            {element.name}
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default Class;