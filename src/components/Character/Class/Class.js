import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
            {(dndClass === null ? null :
                <>
                    <h1>{dndClass.name}</h1>
                    <h2>Class Features</h2>
                    {/* <h3>Hit Points</h3>
                    <ul>
                        <li>Hit Dice:</li>
                        <li>Hit Points at 1st Level:</li>
                        <li>Hit Points at Higher Levels:</li>
                    </ul> */}
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
                    </>}
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
                            return <li key={`${element.index}-${index}`}>{element.name}</li>
                        })}
                    </ul>
                </>
            )}
        </div>
    );
}

export default Class;