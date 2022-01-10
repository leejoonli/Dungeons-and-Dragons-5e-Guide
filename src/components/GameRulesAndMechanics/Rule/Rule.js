import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Rule.module.css';

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
        <div className={styles.ruleContainer}>
            {rule &&
            <>
                {rule.map((element, index) => {
                    return (
                        <div key={`${element}-${index}`}>
                            {element.map((element, index) => {
                                return (
                                    <p key={`rule-${index}`} className={styles.desc}>{element}</p>
                                )
                            })}
                        </div>
                    );
                })}
            </>
            }
        </div>
    );
}

export default Rule;