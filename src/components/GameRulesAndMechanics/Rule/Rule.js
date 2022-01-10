import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Rule(props) {
    const [rule, setRule] = useState(null);

    const { type } = useParams();
    
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/rule-sections/${type}`)
            .then(res => res.json())
            .then(res => setRule(res))
            .catch(console.error);
    }, [type]);

    return (
        <div>
            {rule &&
            <>
                <h2>{rule.name}</h2>
                <p>{rule.desc}</p>
            </>
            }
        </div>
    );
}

export default Rule;