import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Language from '../Language/Language';
import SubRace from '../SubRace/SubRace';

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
        <div>
            {race &&
            <>
                <h1>{race.name}</h1>
                <h2>Age</h2>
                <p>{race.age}</p>
                <h2>Alignment</h2>
                <p>{race.alignment}</p>
                <h2>Size</h2>
                <p>{race.size}</p>
                <h3>Size Description</h3>
                <p>{race.size_description}</p>
                <h2>Speed</h2>
                <p>{race.speed}ft</p>
                <h2>Starting Proficiencies</h2>
                {race.starting_proficiencies.map((element, index) => {
                    return (
                        <div key={`${element.index}-${index}`}>
                            <p>{element.name}</p>
                        </div>
                    )
                })}
                {race.starting_proficiency_options &&
                <>
                    <h3>Choose {race.starting_proficiency_options.choose} from:</h3>
                    {race.starting_proficiency_options.from.map((element, index) => {
                        return (
                            <div key={`${element.index}-${index}`}>
                                <p>{element.name.replace('Skill: ', '')}</p>
                            </div>
                        )
                    })}
                </>
                }
                <h2>Language</h2>
                <p>{race.language_desc}</p>
                <>
                    {race.languages.map((element, index) => {
                        return (
                            <div key={`${element.index}-${index}`}>
                                <h3>{element.name}</h3>
                                <Language languageId={element.index}/>
                            </div>
                        );
                    })}
                </>
                {race.subraces.length !== 0 &&
                <>
                    <h2>Subrace</h2>
                    {race.subraces &&
                    <>
                        {race.subraces.map((element, index) => {
                            return (
                                <div key={`${element.index}-${index}`}>
                                    <h3>{element.name}</h3>
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