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
        <div style={{ marginTop: '-100px' }} >

            <h1>Meet The Cast</h1>
            <Link to={'/theCast'}>
                <button> View all</button>
            </Link>

            <Swiper





                loop={false}
                loopFillGroupWithBlank={false}

                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    "@1.50": {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {


                    characters.slice(0, 8).map(char =>
                        <SwiperSlide key={char.id} className="charBox">
                            <img src={char.image} alt="" />
                            <h1>{char.name}</h1>
                        </SwiperSlide>)

                }
            </Swiper>
        </div>
    );
}

export default TheCast;
