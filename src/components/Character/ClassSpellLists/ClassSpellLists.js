import React from 'react';
import ClassSpellList from '../ClassSpellList/ClassSpellList';
import styles from './ClassSpellLists.module.css';

function ClassSpellLists(props) {
    // need to get the class name
    // need to get the count number of spells based on class name
    // depending on the class name use a different url path and count number
    // useEffect to fetch spell list information from api
    return (
        <div>
            <ClassSpellList classId={`bard`}/>
            <ClassSpellList classId={`cleric`}/>
            <ClassSpellList classId={`druid`}/>
            <ClassSpellList classId={`paladin`}/>
            <ClassSpellList classId={`ranger`}/>
            <ClassSpellList classId={`sorcerer`}/>
            <ClassSpellList classId={`warlock`}/>
            <ClassSpellList classId={`wizard`}/>
        </div>
    );
}

export default ClassSpellLists;