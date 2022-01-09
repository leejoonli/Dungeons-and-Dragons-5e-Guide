import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ClassSpellList(props) {
    // initial state to hold class spell list data
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

    // state to hold class spell list
    const [classSpellList, setClassSpellList] = useState(initState);

    // useEffect to fetch class spell list from api
    useEffect(() => {
        let limit;
        switch(props.classId) {
            case 'bard':
                limit = '113';
                break;
            case 'cleric':
                limit = '143';
                break;
            case 'druid':
                limit = '125';
                break;
            case 'paladin':
                limit = '54';
                break;
            case 'ranger':
                limit = '37';
                break;
            case 'sorcerer':
                limit = '122';
                break;
            case 'warlock':
                limit = '90';
                break;
            case 'wizard':
                limit = '206';
                break;
            default:
                break;
        }
        fetch(`https://api.open5e.com/spells/?search=${props.classId}&limit=${limit}`)
            .then(res => res.json())
            .then(res => {
                setClassSpellList([...classSpellList], classSpellList[0].spell_list = res.results.filter((element) => element.level === 'Cantrip'));
                setClassSpellList([...classSpellList], classSpellList[1].spell_list = res.results.filter((element) => element.level === '1st-level'));
                setClassSpellList([...classSpellList], classSpellList[2].spell_list = res.results.filter((element) => element.level === '2nd-level'));
                setClassSpellList([...classSpellList], classSpellList[3].spell_list = res.results.filter((element) => element.level === '3rd-level'));
                setClassSpellList([...classSpellList], classSpellList[4].spell_list = res.results.filter((element) => element.level === '4th-level'));
                setClassSpellList([...classSpellList], classSpellList[5].spell_list = res.results.filter((element) => element.level === '5th-level'));
                setClassSpellList([...classSpellList], classSpellList[6].spell_list = res.results.filter((element) => element.level === '6th-level'));
                setClassSpellList([...classSpellList], classSpellList[7].spell_list = res.results.filter((element) => element.level === '7th-level'));
                setClassSpellList([...classSpellList], classSpellList[8].spell_list = res.results.filter((element) => element.level === '8th-level'));
                setClassSpellList([...classSpellList], classSpellList[9].spell_list = res.results.filter((element) => element.level === '9th-level'));
            })
            .catch(console.error);
    }, []);

    return (
        <div>
            {classSpellList &&
            <>
                {/* https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript */}
                <h2>{props.classId.charAt(0).toUpperCase() + props.classId.slice(1)}</h2>
                {classSpellList.map((element, index) => {
                    return (
                        <div key={`${element.level}-${index}`}>
                            {element.level === 0 ? <h3>Cantrip</h3> : <h3>Level {element.level}</h3>}
                            {element.spell_list.map((element, index) => {
                                return (
                                    <div key={`${element.slug}-${index}`}>
                                        <Link to={`/character/spells/${element.slug}`}>{element.name}</Link>
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

export default ClassSpellList;