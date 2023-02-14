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
        <div className='theCast'>
            <Link to={'/'} ><img src={logo} height={48} width={227} alt="" /></Link>

            <h1 style={{
                textAlign: 'start',
                position: 'absolute',
                left: '100px',
                top: '80px'
            }}>The Cast</h1>
            <div className='castPage'>

                {
                    characters.slice(0, 15).map(char =>
                        <Link to={`/theCast/${char.id}`} key={char.id} className="largeBox ">
                            <img className='charImage' src={char.image} alt="" />
                            <h1 className='charName'>{char.name}</h1>
                        </Link>)

                }

            </div>


        </div>
    );
}

export default CastPage;
