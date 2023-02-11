import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const IndividualCast = () => {
    const [individualCast, setIndividualCast] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
            .then((data) => setIndividualCast(data));
    }, [id])
    return (
        <div>
            {<>
                <h1>{individualCast.name}</h1>
                <img src={individualCast.image} alt="" />
                <p>{individualCast.status}</p>
                <p>{individualCast.species}</p>
                <p>{individualCast.gender}</p>






            </>
            }

        </div>
    );
}

export default IndividualCast;
