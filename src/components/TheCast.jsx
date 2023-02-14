import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";




const TheCast = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => setCharacters(data.results));
    }, [])


    return (
        <div className='castHome'>
            <Link className='viewAll' to={'/theCast'}>View all</Link>
            <h1 className='meetText'>Meet The Cast</h1>


            <Swiper className='swiper'





                loop={false}
                loopFillGroupWithBlank={false}

                breakpoints={{
                    "@0.00": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },

                    "@1.50": {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    }
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {


                    characters.slice(0, 8).map(char =>
                        <SwiperSlide key={char.id} className="largeBox" >
                            <img className='charImage' src={char.image} alt="" />
                            <p className='charName'>{char.name}</p>
                        </SwiperSlide>)

                }
            </Swiper>
        </div >
    );
}

export default TheCast;
