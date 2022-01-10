import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import RuleSections from './RuleSections/RuleSections';
import styles from './GameRulesAndMechanics.module.css';

function GameRulesAndMechanics(props) {
    const [ruleSections, setRuleSections] = useState(null);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/rules/`)
            .then(res => res.json())
            .then(res => setRuleSections(res))
            .catch(console.error);
    }, []);

    return (
        <div className={styles.gameRulesAndMechanicsAccordion}>
            <Accordion>
                {ruleSections &&
                <>
                    {ruleSections.results.map((element, index) => {
                        return (
                            <Accordion.Item eventKey={index} key={`${element.index}-${index}`}>
                                <Accordion.Header>
                                    <h2>{element.name}</h2>
                                </Accordion.Header>
                                <Accordion.Body className={styles.ruleSectionAccordionBody}>
                                    <RuleSections ruleId={element.index} />
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </>
                }
            </Accordion>
        </div>
    );
}

export default GameRulesAndMechanics;