import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Rule(props) {
    const [rule, setRule] = useState(null);

    const { type } = useParams();
    
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/rule-sections/${type}`)
            .then(res => res.json())
            .then(res => setRule(res.desc.split('#')))
            .catch(console.error);
    }, [type]);

    return (
        <div>
            {rule &&
            <>
                <h2>{rule[2]}</h2>
                {/* <p>{rule.desc}</p> */}
            </>
            }
        </div>
    );
}

export default Rule;