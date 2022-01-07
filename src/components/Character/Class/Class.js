import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubClass from '../SubClass/SubClass';
import Features from '../Features/Features';
import styles from './Class.module.css';

function Class(props) {
    // state to hold class and class level information
    const [dndClass, setDndClass] = useState(null);
    const [dndClassLevels, setDndClassLevels] = useState(null);

    // id to hold the query parameters for fetch request
    const { id } = useParams();
    
    // useEffect to make api call to fetch data about class and class level
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${id}`)
            .then(res => res.json())
            .then(res => setDndClass(res))
            .catch(console.error)
        fetch(`https://www.dnd5eapi.co/api/classes/${id}/levels`)
            .then(res => res.json())
            .then(res => {
                switch(id) {
                    case 'barbarian':
                        setDndClassLevels(res.filter((element) => element.class_specific));
                        break;
                    default:
                        setDndClassLevels(res);
                        break;
                }
            })
            .catch(console.error)
    }, [id]);
    
    return (
        <div>
            {(dndClass &&
                <>
                    <h1>{dndClass.name}</h1>
                    {dndClassLevels &&
                    <div>
                        <h2>The {dndClass.name}</h2>
                        {!dndClass.spellcasting ? null : <div>Spell Slots per Level</div>}
                        <div className={styles.ifoContainer}>
                            {dndClassLevels.map((element, index) => {
                                return (
                                    <div key={`${element.index}-${index}`} className={styles.rowContainer}>
                                        {element.spellcasting ? (
                                        <>
                                            <div className={styles.tableInfo}>{element.level}</div>
                                            <div className={styles.tableInfo}>+{element.prof_bonus}</div>
                                            {/* https://stackoverflow.com/questions/40803828/reactjs-map-through-object Needed to map out an object and came across this solution*/}
                                            {Object.keys(element.spellcasting).map((item, index) => {
                                                return (
                                                    <div key={index} className={styles.tableInfo}>{element.spellcasting[item] ? element.spellcasting[item] : '-'}</div>
                                                );
                                            })}
                                        </>
                                        ) : (dndClass.name === 'Fighter') ? (
                                        <>
                                            {element.prof_bonus ?
                                            <>
                                                <div>{element.level}</div>
                                                <div>+{element.prof_bonus}</div>
                                            </>
                                            : null}
                                        </>
                                        ) : (dndClass.name === 'Monk') ? (
                                        <>
                                            {element.class_specific && (
                                            <>
                                                <div>1d{element.class_specific.martial_arts.dice_value}</div>
                                                <div>{element.class_specific.ki_points ? element.class_specific.ki_points : '-'}</div>
                                                <div>{element.class_specific.unarmored_movement ? `+${element.class_specific.unarmored_movement} ft.` : '-'}</div>
                                            </>
                                            )}
                                        </>
                                        ) : (element.class_specific) ? (
                                        <>
                                            <div>{element.level}</div>
                                            <div>+{element.prof_bonus}</div>
                                            {Object.keys(element.class_specific).map((item, index) => {
                                                return (
                                                    <div key={index}>{element.class_specific[item] === 9999 ? 'Unlimited' : element.class_specific[item] ? element.class_specific[item] : '-'}</div>
                                                );
                                            })}
                                        </>
                                        ) : null}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    }
                    <h2>Class Features</h2>
                    <h3>Hit Points</h3>
                    <ul>
                        <li>Hit Dice: 1d{dndClass.hit_die} per {dndClass.index} level</li>
                        <li>Hit Points at 1st Level: {dndClass.hit_die} + your Constitution modifier</li>
                        <li>Hit Points at Higher Levels: 1d{dndClass.hit_die} + your Constitution modifier per {dndClass.index} level after 1st</li>
                    </ul>
                    <h3>Proficiencies</h3>
                    <h4>Weapons and Armor:</h4>
                    <ul>
                        {dndClass.proficiencies.map((element, index) => {
                            return <li key={`${element.index}-${index}`}>{element.name}</li>;
                        })}
                    </ul>
                    {!dndClass.proficiency_choices[1] ? null:
                    <>
                        <h4>Tools:</h4>
                        <p>Choose: {dndClass.proficiency_choices[1].choose}</p>
                        <ul>
                            {dndClass.proficiency_choices[1].from.map((element, index) => {
                                return <li key={`${element.index}-${index}`}>{element.name}</li>
                            })}
                        </ul>
                    </>
                    }
                    <h4>Saving Throws:</h4>
                    <ul>
                        {dndClass.saving_throws.map((element, index) => {
                            return <li key={`${element.index}-${index}`}>{element.name}</li>
                        })}
                    </ul>
                    <h4>Skills:</h4>
                    <p>Choose {dndClass.proficiency_choices[0].choose}</p>
                    <ul>
                        {dndClass.proficiency_choices[0].from.map((element, index) => {
                            return <li key={`${element.index}-${index}`}>{element.name.replace('Skill: ', '')}</li>
                        })}
                    </ul>
                    <h4>Equipment</h4>
                    <ul>
                        {dndClass.starting_equipment.map((element, index) => {
                            return <li key={`${element.equipment.index}-${index}`}>{element.equipment.name}</li>
                        })}
                    </ul>
                    <ul>
                        {dndClass.starting_equipment_options.map((element, index) => {
                            return (
                                <li key={`${element.type}-${index}`}>Choose {element.choose}: {element.from.map((element, index) => {
                                    return (
                                        element.equipment ? <p key={`${element.equipment.index}-${index}`}>{element.equipment.name}</p> :
                                        !element.equipment_option ? null : <p key={`${element.equipment_option.from.equipment_category.index}-${index}`}>{element.equipment_option.from.equipment_category.name}</p>
                                    );
                                })}</li>
                            )
                        })} 
                    </ul>
                    {dndClass.spellcasting && (
                        <>
                            <h3>Spellcasting</h3>
                            <div>{dndClass.spellcasting.info.map((element, index) => {
                                return (
                                    <div key={`${element.name}-${index}`}>
                                        <h5>{element.name}</h5>
                                        {element.desc.map((element, index) => {
                                            return (
                                                <p key={`desc-${index}`}>{element}</p>
                                            );
                                        })}
                                    </div>
                                );
                            })}</div>
                            <h4>Spellcasting Ability</h4>
                            <p>{dndClass.spellcasting.spellcasting_ability.name}</p>
                        </>
                    )}
                    {dndClassLevels &&
                    <>
                        {dndClassLevels.map((element, index) => {
                            return (
                                <div key={`${element.index}-${index}`}>
                                    {element.features.map((element, index) => {
                                        return (
                                            <div key={`${element.index}-${index}`}>
                                                <h4>{element.name}</h4>
                                                <Features features={element.index} />
                                            </div>
                                        )
                                    })}
                                </div>
                            );
                        })}
                    </>
                    }
                    <h4>Subclass</h4>
                    <SubClass subclass={dndClass.subclasses[0].index} />
                </>
            )}
        </div>
    );
}

export default Class;