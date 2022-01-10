import React from 'react';
import styles from './Character.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Classes from './Classes/Classes';
import Races from './Races/Races';
import Stats from './Stats/Stats';
import SpellLists from './SpellLists/SpellLists';

function Character(props) {
    return (
        <div className={styles.subNavBar}>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Classes</Accordion.Header>
                    <Accordion.Body className={styles.characterAccordionBody}>
                        <Classes />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Races</Accordion.Header>
                    <Accordion.Body className={styles.characterAccordionBody}>
                        <Races />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Character Statistics</Accordion.Header>
                    <Accordion.Body className={styles.characterAccordionBody}>
                        <Stats />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Spells</Accordion.Header>
                    <Accordion.Body className={styles.characterAccordionBody}>
                        <SpellLists />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Character;