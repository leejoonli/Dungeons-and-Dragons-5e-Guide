import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Language from '../Language/Language';
import SubRace from '../SubRace/SubRace';
import styles from './Race.module.css';

function Race(props) {
    // state to hold api information
    const [race, setRace] = useState(null);

    // useParams to get id from url
    const { id } = useParams();

    // useEffect to fetch api information
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/races/${id}`)
            .then(res => res.json())
            .then(res => setRace(res))
            .catch(console.error);
    }, [id]);

    return (
        <div className={styles.raceContainer}>
            {race &&
            <>
                <h1 className={styles.raceHeader}>{race.name}</h1>
                <h2 className={styles.headerTwo}>Ability Score Increase</h2>
                {race.ability_bonuses.map((element, index) => {
                    return (
                        <p key={`asi-${index}`} className={styles.desc}>+{element.bonus} to {element.ability_score.name}</p>
                    )
                })}
                <h2 className={styles.headerTwo}>Age</h2>
                <p className={styles.desc}>{race.age}</p>
                <h2 className={styles.headerTwo}>Alignment</h2>
                <p className={styles.desc}>{race.alignment}</p>
                <h2 className={styles.headerTwo}>Size</h2>
                <p className={styles.desc}>{race.size}</p>
                <h3 className={styles.headerThree}>Size Description</h3>
                <p className={styles.desc}>{race.size_description}</p>
                <h2 className={styles.headerTwo}>Speed</h2>
                <p className={styles.desc}>{race.speed}ft</p>
                {race.starting_proficiencies &&
                <>
                    <h2 className={styles.headerTwo}>Starting Proficiencies</h2>
                    <ul className={styles.listContainer}>
                        {race.starting_proficiencies.map((element, index) => {
                            return (
                                <li key={`${element.index}-${index}`} className={styles.listItem}>{element.name}</li>
                            );
                        })}
                    </ul>
                </>
                }
                {race.starting_proficiency_options &&
                <>
                    <h3 className={styles.headerThree}>Choose {race.starting_proficiency_options.choose} from:</h3>
                    <ul className={styles.listContainer}>
                        {race.starting_proficiency_options.from.map((element, index) => {
                            return (
                                <li key={`${element.index}-${index}`} className={styles.listItem}>{element.name.replace('Skill: ', '')}</li>
                            );
                        })}
                    </ul>
                </>
                }
                <h2 className={styles.headerTwo}>Language</h2>
                <p className={styles.desc}>{race.language_desc}</p>
                <>
                    {race.languages.map((element, index) => {
                        return (
                            <div key={`${element.index}-${index}`}>
                                <h3 className={styles.headerThree}>{element.name}</h3>
                                <Language languageId={element.index}/>
                            </div>
                        );
                    })}
                    {race.language_options &&
                    <>
                        <h3 className={styles.headerThree}>Choose {race.language_options.choose} from</h3>
                        <ul className={styles.listContainer}>
                            {race.language_options.from.map((element, index) => {
                                return (
                                    <li key={`${element.index}-${index}`} className={styles.listItem}>{element.name}</li>
                                )
                            })}
                        </ul>
                    </>
                    }
                </>
                {race.subraces.length !== 0 &&
                <>
                    <h2 className={styles.headerTwo}>Subrace</h2>
                    {race.subraces &&
                    <>
                        {race.subraces.map((element, index) => {
                            return (
                                <div key={`${element.index}-${index}`}>
                                    <h3 className={styles.headerThree}>{element.name}</h3>
                                    <SubRace subRaceId={element.index}/>
                                </div>
                            )
                        })}
                    </>
                    }
                </>
                }
            </>
            }
        </div>
    );
}

export default Race;