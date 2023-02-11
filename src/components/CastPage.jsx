import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../utils/Home page/Hero Elements/Logo.png'



const CastPage = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setCharacters(data.results));
    }, [])
    return (
        <div>
            <Link to={'/'} ><img src={logo} height={48} width={227} alt="" /></Link>


            <div className='castPage'>
                {
                    characters.slice(0, 15).map(char =>
                        <Link to={`/theCast/${char.id}`} key={char.id} className="charBox ">
                            <img src={char.image} alt="" />
                            <h1>{char.name}</h1>
                        </Link>)
                }
            </div>


        </div>
    );
}

export default CastPage;
