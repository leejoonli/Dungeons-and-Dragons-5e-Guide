import React, { useEffect, useState } from 'react';

function SubClass(props) {
    const [subClass, setSubClass] = useState(null);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/subclasses/${props.subclass}`)
            .then(res => res.json())
            .then(res => setSubClass(res))
            .catch(console.error)
    }, [props]);

    return (
        <div>
            {subClass &&
                <h4>{subClass.subclass_flavor}: {subClass.name}</h4>
            }
        </div>
    );
}

export default SubClass;