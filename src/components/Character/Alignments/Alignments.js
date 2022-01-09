import React, { useState, useEffect } from 'react';
import Alignment from '../Alignment/Alignment';

function Alignments(props) {
    // state to hold the list of alignments from api
    const [alignments, setAlignments] = useState(null);

    // useEffect to fetch the list of alignments from api
    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/alignments/`)
            .then(res => res.json())
            .then(res => setAlignments(res))
            .catch(console.error);
    }, []);

    return (
        <>
            {alignments &&
            <>
                {alignments.results.map((element, index) => {
                    return (
                        <div key={`${element.index}-${index}`}>
                            <Alignment alignmentId={element.index} />
                        </div>
                    )
                })}
            </>
            }
        </>
    );
}

export default Alignments;