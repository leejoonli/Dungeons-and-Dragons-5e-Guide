import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Rule(props) {
    const [rule, setRule] = useState(null);

    const { type } = useParams();
    
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/rule-sections/${type}`)
            .then(res => res.json())
            .then(res => {
                const temp = res.desc.split('#').filter(element => element.length > 0);
                setRule(temp.map((element) => {
                    return element.split('\n').filter(element => element.length > 0)
                }));
            })
            .catch(console.error);
    }, [type]);

    return (
        <div>
            {rule &&
            <>
                {rule.map((element) => {
                    return (
                        element.map((element, index) => {
                            return (
                                <p key={`rule-${index}`}>{element}</p>
                            )
                        })
                    );
                })}
            </>
            }
        </div>
    );
}

export default Rule;