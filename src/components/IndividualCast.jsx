import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import logo from '../utils/Home page/Hero Elements/Logo.png'
import status from '../utils/Cast Details/Icons/PNG/Status.png'
import species from '../utils/Cast Details/Icons/PNG/Species.png'
import gender from '../utils/Cast Details/Icons/PNG/Gender.png'
import origin from '../utils/Cast Details/Icons/PNG/origin.png'
import place from '../utils/Cast Details/Icons/PNG/Location.png'
import playlist from '../utils/Cast Details/Icons/PNG/playlist.png'


const IndividualCast = () => {
    const [individualCast, setIndividualCast] = useState([]);
    const [individualCastlocation, setIndividualCastlocation] = useState([]);
    const [individualCastOrigin, setIndividualCastOrigin] = useState([]);
    const [episodes, setEpisodes] = useState([]);


    const { id } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
            .then((data) => setIndividualCast(data));

    }, [])
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
            .then((data) => setIndividualCastlocation(data.location));

    }, [])



    useEffect(() => {

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
            .then((data) => setIndividualCastOrigin(data.origin));

    }, [id])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
            .then(res => res.json())
            .then(data => setEpisodes(data.results));
    }, [])






    return (
        <div className='individualCast'>
            <div>
                <Link to={'/'} ><img src={logo} height={48} width={227} alt="" /></Link>
                <div className='row2'>
                    <div>
                        <h1 style={{ color: '#14D9E5', fontSize: '48px', fontWeight: '600', lineHeight: '55px' }} >{individualCast.name}</h1>
                        <img className='imageBox' src={individualCast.image} alt="" />
                    </div>
                    <div>
                        <div className='row3'>
                            <p className='individualBox'><img src={status} alt="" /><p>status</p><h2>{individualCast.status}</h2></p>

                            <p className='individualBox'><img src={species} alt="" /><p>Species</p><h2>{individualCast.species}</h2></p>


                            <p className='individualBox' ><img src={gender} alt="" /><p>Gender</p><h2>{individualCast.gender}</h2></p>




                        </div>
                        <p className='individualLargeBox' ><img src={origin} alt="" /><p>Origin</p><h2>{individualCastOrigin.name}</h2></p>
                        <p className='individualLargeBox' ><img src={place} alt="" /><p>Last Known Location</p><h2>{individualCastlocation.name}</h2></p>

                        <ul className='episodeBox'>
                            <img src={playlist} width='40px' alt="" />
                            <p>Episodes</p>
                            {

                                episodes.map(episode =>
                                    <li key={episode.id} >


                                        <h2>{episode.name}</h2>
                                    </li>)

                            }
                        </ul></div>


                </div>

            </div>



        </div>
    );
}

export default IndividualCast;
