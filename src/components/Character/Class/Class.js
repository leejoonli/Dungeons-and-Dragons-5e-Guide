import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubClass from '../SubClass/SubClass';
import Feature from '../Feature/Feature';
import styles from './Class.module.css';

function Class(props) {
    // state to hold class and class level information
    const [dndClass, setDndClass] = useState(null);
    const [dndClassLevels, setDndClassLevels] = useState(null);
    const [dndClassLevelsData, setDndClassLevelsData] = useState([]);

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
                        let finalBarbTempArr = [];
                        const tempBarbArr = res.filter((element) => element.class_specific);
                        setDndClassLevels(tempBarbArr);
                        finalBarbTempArr.push('Level');
                        finalBarbTempArr.push('Proficiency Bonus');
                        finalBarbTempArr.push('Rages');
                        finalBarbTempArr.push('Rage Damage');
                        for(let i = 0; i < tempBarbArr.length; i++) {
                            finalBarbTempArr.push(tempBarbArr[i].level);
                            finalBarbTempArr.push(`+${tempBarbArr[i].prof_bonus}`);
                            finalBarbTempArr.push(tempBarbArr[i].class_specific.rage_count);
                            finalBarbTempArr.push(`+${tempBarbArr[i].class_specific.rage_damage_bonus}`);
                        }
                        setDndClassLevelsData(finalBarbTempArr);
                        break;
                    case 'monk':
                        let finalMonkTempArr = [];
                        const tempMonkArr = res.filter((element) => element.class_specific);
                        setDndClassLevels(tempMonkArr);
                        finalMonkTempArr.push('Level');
                        finalMonkTempArr.push('Proficiency Bonus');
                        finalMonkTempArr.push('Martial Arts');
                        finalMonkTempArr.push('Ki Points');
                        finalMonkTempArr.push('Unarmored Movement');
                        for(let i = 0; i < tempMonkArr.length; i++) {
                            finalMonkTempArr.push(tempMonkArr[i].level);
                            finalMonkTempArr.push(`+${tempMonkArr[i].prof_bonus}`);
                            finalMonkTempArr.push(`1d${tempMonkArr[i].class_specific.martial_arts.dice_value}`);
                            finalMonkTempArr.push(tempMonkArr[i].class_specific.ki_points);
                            finalMonkTempArr.push(tempMonkArr[i].class_specific.unarmored_movement);
                        }
                        setDndClassLevelsData(finalMonkTempArr);
                        break;
                    case 'fighter':
                        let finalFighterTempArr = [];
                        const tempFighterArr = res.filter((element) => element.class_specific);
                        setDndClassLevels(tempFighterArr);
                        finalFighterTempArr.push('Level');
                        finalFighterTempArr.push('Proficiency Bonus');
                        for(let i = 0; i < tempFighterArr.length; i++) {
                            finalFighterTempArr.push(tempFighterArr[i].level);
                            finalFighterTempArr.push(`+${tempFighterArr[i].prof_bonus}`);
                        }
                        setDndClassLevelsData(finalFighterTempArr);
                        break;
                    case 'rogue':
                        let finalRogueTempArr = [];
                        const tempRogueArr = res.filter((element) => element.class_specific);
                        setDndClassLevels(tempRogueArr);
                        finalRogueTempArr.push('Level');
                        finalRogueTempArr.push('Proficiency Bonus');
                        finalRogueTempArr.push('Sneak Attack');
                        for(let i = 0; i < tempRogueArr.length; i++) {
                            finalRogueTempArr.push(tempRogueArr[i].level);
                            finalRogueTempArr.push(`+${tempRogueArr[i].prof_bonus}`);
                            finalRogueTempArr.push(`${tempRogueArr[i].class_specific.sneak_attack.dice_count}d${tempRogueArr[i].class_specific.sneak_attack.dice_value}`);
                        }
                        setDndClassLevelsData(finalRogueTempArr);
                        break;
                    case 'warlock':
                        let finalWarlockTempArr = [];
                        const tempWarlockArr = res.filter((element) => element.class_specific);
                        setDndClassLevels(tempWarlockArr);
                        finalWarlockTempArr.push('Level');
                        finalWarlockTempArr.push('Proficiency Bonus');
                        finalWarlockTempArr.push('Cantrips Known');
                        finalWarlockTempArr.push('Spells Known');
                        finalWarlockTempArr.push('Spell Slots');
                        finalWarlockTempArr.push('Slot Level');
                        finalWarlockTempArr.push('Invocations Known');
                        for(let i = 0; i < tempWarlockArr.length; i++) {
                            finalWarlockTempArr.push(tempWarlockArr[i].level);
                            finalWarlockTempArr.push(`+${tempWarlockArr[i].prof_bonus}`);
                            // https://stackoverflow.com/questions/40803828/reactjs-map-through-object Found a solution to map the keys of an object
                            (Object.keys(tempWarlockArr[i].spellcasting)).forEach((element, index) => {
                               if(tempWarlockArr[i].spellcasting[element] && index > 1) {
                                  finalWarlockTempArr.push(tempWarlockArr[i].spellcasting[element]);
                                  finalWarlockTempArr.push((index - 1));
                               }
                               else if(tempWarlockArr[i].spellcasting[element]) {
                                  finalWarlockTempArr.push(tempWarlockArr[i].spellcasting[element]);
                               }
                            });
                            finalWarlockTempArr.push(tempWarlockArr[i].class_specific.invocations_known);
                        }
                        setDndClassLevelsData(finalWarlockTempArr);
                        break;
                    default:
                        let finalCasterTempArr = [];
                        const tempCasterArr = res.filter((element) => element.spellcasting);
                        setDndClassLevels(tempCasterArr);
                        finalCasterTempArr.push('Level');
                        finalCasterTempArr.push('Proficiency Bonus');
                        if (id === 'paladin') {
                            for(let i = 1; i < 6; i++) {
                                if(i === 1) {
                                    finalCasterTempArr.push(`${i}st`);
                                } else if(i === 2) {
                                    finalCasterTempArr.push(`${i}nd`);
                                }
                                else if(i === 3) {
                                    finalCasterTempArr.push(`${i}rd`);
                                } else {
                                    finalCasterTempArr.push(`${i}th`);
                                }
                            }
                        } else if(id === 'ranger') {
                            finalCasterTempArr.push(`Spells Known`);
                            for(let i = 1; i < 6; i++) {
                                if(i === 1) {
                                    finalCasterTempArr.push(`${i}st`);
                                } else if(i === 2) {
                                    finalCasterTempArr.push(`${i}nd`);
                                }
                                else if(i === 3) {
                                    finalCasterTempArr.push(`${i}rd`);
                                } else {
                                    finalCasterTempArr.push(`${i}th`);
                                }
                            }
                        } else if(id === 'sorcerer' || id === 'bard') {
                            finalCasterTempArr.push(`Cantrips Known`);
                            finalCasterTempArr.push(`Spells Known`);
                            for(let i = 1; i < 10; i++) {
                                if(i === 1) {
                                    finalCasterTempArr.push(`${i}st`);
                                } else if(i === 2) {
                                    finalCasterTempArr.push(`${i}nd`);
                                }
                                else if(i === 3) {
                                    finalCasterTempArr.push(`${i}rd`);
                                } else {
                                    finalCasterTempArr.push(`${i}th`);
                                }
                            }
                        } else if(id === 'wizard' || id === 'cleric' || id === 'druid') {
                            finalCasterTempArr.push(`Cantrips Known`);
                            for(let i = 1; i < 10; i++) {
                                if(i === 1) {
                                    finalCasterTempArr.push(`${i}st`);
                                } else if(i === 2) {
                                    finalCasterTempArr.push(`${i}nd`);
                                }
                                else if(i === 3) {
                                    finalCasterTempArr.push(`${i}rd`);
                                } else {
                                    finalCasterTempArr.push(`${i}th`);
                                }
                            }
                        }
                        for(let i = 0; i < tempCasterArr.length; i++) {
                            finalCasterTempArr.push(tempCasterArr[i].level);
                            finalCasterTempArr.push(`+${tempCasterArr[i].prof_bonus}`);
                            Object.keys(tempCasterArr[i].spellcasting).forEach((element) => finalCasterTempArr.push(tempCasterArr[i].spellcasting[element]));
                        }
                        setDndClassLevelsData(finalCasterTempArr);
                        break;
                }
            })
            .catch(console.error)
    }, [id]);
    
    return (
        <div className={styles.classContainer}>
            {(dndClass &&
            <>
                <h1 className={styles.name}>{dndClass.name}</h1>
                {dndClassLevelsData &&
                <div>
                    <div className={styles.gridHeader}>
                        <div>The {dndClass.name}</div>
                        {dndClass.spellcasting && <div>Spell Slots per Spell Level</div>}
                    </div>
                    <div className={styles.gridContainer} style={{ gridTemplateColumns: id === 'barbarian' ? 'repeat(4, 1fr)'
                    : id === 'fighter' ? 'repeat(2, 1fr)'
                    : id === 'monk' ? 'repeat(5, 1fr)'
                    : id === 'rogue' ? 'repeat(3, 1fr)'
                    : id === 'warlock' || id === 'paladin' ? 'repeat(7, 1fr)'
                    : id === 'ranger' ? 'repeat(8, 1fr)'
                    : id === 'cleric' || id === 'druid' || id === 'wizard' ? 'repeat(12, 1fr)'
                    : 'repeat(13, 1fr)'}}>
                        {dndClassLevelsData.map((element, index) => {
                            return (
                                <div key={`data-${index}`} className={styles.gridElement}>{element === 0 ? '-' : element !== 9999 ? element : 'Unlimited'}</div>
                            )
                        })}
                    </div>
                </div>
                }
                <h2 className={styles.classHeaderTwo}>Class Features</h2>
                <h3 className={styles.classHeaderThree}>Hit Points</h3>
                <ul className={styles.hitPoints}>
                    <li className={styles.hitPoints}>Hit Dice: 1d{dndClass.hit_die} per {dndClass.index} level</li>
                    <li className={styles.hitPoints}>Hit Points at 1st Level: {dndClass.hit_die} + your Constitution modifier</li>
                    <li className={styles.hitPoints}>Hit Points at Higher Levels: 1d{dndClass.hit_die} + your Constitution modifier per {dndClass.index} level after 1st</li>
                </ul>
                <h3 className={styles.classHeaderThree}>Proficiencies</h3>
                <h4 className={styles.classHeaderFour}>Weapons and Armor:</h4>
                <ul className={styles.listContainer}>
                    {dndClass.proficiencies.map((element, index) => {
                        return <li key={`${element.index}-${index}`} className={styles.listItem}>{element.name}</li>;
                    })}
                </ul>
                {!dndClass.proficiency_choices[1] ? null:
                <>
                    <h4 className={styles.classHeaderFour}>Tools:</h4>
                    <p className={styles.choose}>Choose: {dndClass.proficiency_choices[1].choose}</p>
                    <ul className={styles.listContainer}>
                        {dndClass.proficiency_choices[1].from.map((element, index) => {
                            return <li key={`${element.index}-${index}`} className={styles.listItem}>{element.name}</li>
                        })}
                    </ul>
                </>
                }
                <h4 className={styles.classHeaderFour}>Saving Throws:</h4>
                <ul className={styles.listContainer}>
                    {dndClass.saving_throws.map((element, index) => {
                        return <li key={`${element.index}-${index}`} className={styles.listItem}>{element.name}</li>
                    })}
                </ul>
                <h4 className={styles.classHeaderFour}>Skills:</h4>
                <p className={styles.choose}>Choose {dndClass.proficiency_choices[0].choose}</p>
                <ul className={styles.listContainer}>
                    {dndClass.proficiency_choices[0].from.map((element, index) => {
                        return <li key={`${element.index}-${index}`} className={styles.listItem}>{element.name.replace('Skill: ', '')}</li>
                    })}
                </ul>
                <h4 className={styles.classHeaderFour}>Equipment</h4>
                <ul className={styles.listContainer}>
                    {dndClass.starting_equipment.map((element, index) => {
                        return <li key={`${element.equipment.index}-${index}`}>{element.equipment.name}</li>
                    })}
                </ul>
                {/* Currently not working because there are objects in arrays that I'm having trouble iterating over */}
                {/* <ul>
                    {dndClass.starting_equipment_options.map((element, index) => {
                        return (
                            <ul key={`${element.type}-${index}`}>Choose {element.choose}: {element.from.map((element, index) => {
                                return (
                                    Object.keys(element).map((element, index) => {
                                        return <li>{dndClass.starting_equipment_options[element].from[element]}</li>
                                    })
                                    element.equipment ? <>{element.equipment.name}</>
                                    :
                                    !element.equipment_option ? null : <p key={`${element.equipment_option.from.equipment_category.index}-${index}`}>{element.equipment_option.from.equipment_category.name}</p>
                                );
                            })}</ul>
                        )
                    })} 
                </ul> */}
                {dndClass.spellcasting && (
                <>
                    <h3 className={styles.classHeaderThree}>Spellcasting</h3>
                    <div>{dndClass.spellcasting.info.map((element, index) => {
                        return (
                            <div key={`${element.name}-${index}`}>
                                <h4 className={styles.classHeaderFour}>{element.name}</h4>
                                {element.desc.map((element, index) => {
                                    return (
                                        <p key={`desc-${index}`} className={styles.spellcastingInfo}>{element}</p>
                                    );
                                })}
                            </div>
                        );
                    })}</div>
                    <h4 className={styles.classHeaderFour}>Spellcasting Ability</h4>
                    <p className={styles.spellcastingInfo}>{dndClass.spellcasting.spellcasting_ability.name}</p>
                </>
                )}
                {dndClassLevels &&
                <>
                    {dndClassLevels.map((element, index) => {
                        return (
                            <div key={`${element.index}-${index}`}>
                                {element.features.length !== 0 &&
                                <>
                                    <h3 className={styles.classHeaderThree}>Level: {element.level}</h3>
                                    {element.features.map((element, index) => {
                                        return (
                                            <div key={`${element.index}-${index}`}>
                                                <h4 className={styles.classHeaderFour}>{element.name}</h4>
                                                <Feature feature={element.index} />
                                            </div>
                                        )
                                    })}
                                </>
                                }
                            </div>
                        );
                    })}
                </>
                }
                <h3 className={styles.classHeaderThree}>Subclass</h3>
                <SubClass subclass={dndClass.subclasses[0].index} />
            </>
            )}
        </div>
    );
}

export default Class;
