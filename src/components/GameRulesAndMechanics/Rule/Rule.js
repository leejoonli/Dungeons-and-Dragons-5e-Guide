import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Rule(props) {
    const [rule, setRule] = useState(null);

    const { type } = useParams();
    
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/rule-sections/${type}`)
            .then(res => res.json())
            .then(res => setRule(res.desc.split('#')))
            .catch(console.error)
    }, [type]);

    return (
        <div>
            {rule &&
            <>
                {rule.map((element, index) => {
                    return (
                        <div key={`${element.charAt(0)}-${index}`}>
                            {element ? <p>{element.replace('\n', ': ')}</p> : null}
                        </div>
                    )
                })}
                <p>{rule.desc}</p>
            </>
            }
        </div>
    );
}

export default Rule;