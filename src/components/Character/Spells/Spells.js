import React, { useState, useEffect } from 'react';

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
                console.log(res.results.filter((element) => element.level === 'Cantrip'))
            })
            .catch(console.error);
    }, []);

    return (
        <div>
            {/* {spells &&
            <>
                {spells.results.map((element, index) => {
                    return (
                        <p key={`${element.index}-${index}`}>{element.name}</p>
                    )
                })}
            </>
            } */}
        </div>
    );
}

export default Spells;