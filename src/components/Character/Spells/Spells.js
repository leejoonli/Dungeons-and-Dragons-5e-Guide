import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spell from '../Spell/Spell';

function Spells(props) {
    // create an array of objects to organize list of spells from api
    const initState = [
        {
            spell_list: [],
            level: 0,
        },
        {
            spell_list: [],
            level: 1,
        },
        {
            spell_list: [],
            level: 2,
        },
        {
            spell_list: [],
            level: 3,
        },
        {
            spell_list: [],
            level: 4,
        },
        {
            spell_list: [],
            level: 5,
        },
        {
            spell_list: [],
            level: 6,
        },
        {
            spell_list: [],
            level: 7,
        },
        {
            spell_list: [],
            level: 8,
        },
        {
            spell_list: [],
            level: 9,
        }
    ];

    // state to store list of skills from api
    const [spells, setSpells] = useState(initState);

    // useEffect to fetch list of skills from api
    // using another api because the data list has more information without inputting more specific query parameters
    useEffect(() => {
        fetch(`https://api.open5e.com/spells/?limit=321`)
            .then(res => res.json())
            .then(res => {
                setSpells([...spells], spells[0].spell_list = res.results.filter((element) => element.level === 'Cantrip'));
                setSpells([...spells], spells[1].spell_list = res.results.filter((element) => element.level === '1st-level'));
                setSpells([...spells], spells[2].spell_list = res.results.filter((element) => element.level === '2nd-level'));
                setSpells([...spells], spells[3].spell_list = res.results.filter((element) => element.level === '3rd-level'));
                setSpells([...spells], spells[4].spell_list = res.results.filter((element) => element.level === '4th-level'));
                setSpells([...spells], spells[5].spell_list = res.results.filter((element) => element.level === '5th-level'));
                setSpells([...spells], spells[6].spell_list = res.results.filter((element) => element.level === '6th-level'));
                setSpells([...spells], spells[7].spell_list = res.results.filter((element) => element.level === '7th-level'));
                setSpells([...spells], spells[8].spell_list = res.results.filter((element) => element.level === '8th-level'));
                setSpells([...spells], spells[9].spell_list = res.results.filter((element) => element.level === '9th-level'));
            })
            .catch(console.error);
    }, []);
    
    return (
        <div>
            {spells &&
            <>
                {spells.map((element, index) => {
                    return (
                        <div key={`${element.level}-${index}`}>
                            {element.level === 0 ? <h2>Cantrip</h2> : <h2>Level {element.level}</h2>}
                            {element.spell_list.map((element, index) => {
                                return (
                                    <div key={`${element.slug}-${index}`}>
                                        <Link to={`/character/spells/${element.slug}`}>{element.name}</Link>
                                        {/* <Spell spellId={element.slug} /> */}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </>
            }
        </div>
    );
}

export default Spells;