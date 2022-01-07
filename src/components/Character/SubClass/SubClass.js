import React, { useEffect, useState } from 'react';

function SubClass(props) {
    const [subClass, setSubClass] = useState(null);
    const [subClassLevels, setSubClassLevels] = useState(null);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/subclasses/${props.subclass}`)
            .then(res => res.json())
            .then(res => setSubClass(res))
            .catch(console.error)
        fetch(`https://www.dnd5eapi.co/api/subclasses/${props.subclass}/levels`)
            .then(res => res.json())
            .then(res => setSubClassLevels(res))
            .catch(console.error)
    }, [props]);

    return (
        <div>
            {subClass &&
                <>
                    <h2>{subClass.subclass_flavor}: {subClass.name}</h2>
                    <p>{subClass.desc[0]}</p>
                    {subClassLevels &&
                        <>
                            {subClassLevels.map((element, index) => {
                                return (
                                    <div key={`${element.index}-${index}`}>
                                        <h3>At Level {element.level}:</h3>
                                        <>
                                            {element.features.map((element) => {
                                                return (
                                                    <div key={`${element.index}-${index}`}>
                                                        <h4>{element.name}</h4>
                                                    </div>
                                                )
                                            })}
                                        </>
                                    </div>
                                )
                            })}
                        </>
                    }
                </>
            }
        </div>
    );
}

export default SubClass;