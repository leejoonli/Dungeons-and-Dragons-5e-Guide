import React, { useState, useEffect } from 'react';
import Trait from '../Trait/Trait';

function SubRace(props) {
    const [subRace, setSubRace] = useState(null);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/subraces/${props.subRaceId}`)
            .then(res => res.json())
            .then(res => setSubRace(res))
            .catch(console.error);
    }, [props.subRaceId]);

    return (
        <>
            {subRace &&
            <div>
                <p>{subRace.desc}</p>
                {subRace.ability_bonuses &&
                <>
                    <h4>Ability Bonuses</h4>
                    {subRace.ability_bonuses.map((element, index) => {
                        return (
                            <div key={`${element.ability_score.index}-${index}`}>
                                <p>+{element.bonus} to {element.ability_score.name}</p>
                            </div>
                        )
                    })}
                </>
                }
                {subRace.racial_traits &&
                <>
                    {subRace.racial_traits.map((element, index) => {
                        return (
                            <div key={`${element.index}-${index}`}>
                                <h4>Racial Traits</h4>
                                <Trait traitId={element.index} />
                            </div>
                        )
                    })}
                </>
                }
                {subRace.starting_proficienies &&
                <>
                    <h4>Starting Proficiencies</h4>
                    {subRace.starting_proficienies.map((element, index) => {
                        return (
                            <div key={`${element.index}-${index}`}>
                                {element.name}
                            </div>
                        )
                    })}
                </>
                }
                {subRace.language_options &&
                <>
                    <h4>Choose {subRace.language_options.choose} from:</h4>
                    {subRace.language_options.from.map((element, index) => {
                        return (
                            <div key={`${element.index}-${index}`}>
                                {element.name}
                            </div>
                        )
                    })}
                </>
                }
            </div>
            }
        </>
    );
}

export default SubRace;