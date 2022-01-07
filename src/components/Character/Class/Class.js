import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubClass from '../SubClass/SubClass';

function Class(props) {
    const [dndClass, setDndClass] = useState(null);

    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${id}`)
            .then(res => res.json())
            .then(res => setDndClass(res))
            .catch(console.error)
    }, [id]);
    
    return (
        <div>
            {(dndClass &&
                <>
                    <h1>{dndClass.name}</h1>
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
                            <h4>Spellcasting</h4>
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
                    <h4>Subclass</h4>
                    <SubClass subclass={dndClass.subclasses[0].index} />
                </>
            )}
        </div>
    );
}

export default Class;