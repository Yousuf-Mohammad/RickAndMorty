import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
            .then(res => res.json())
            .then(data => setEpisodes(data.results));
    }, [])

    return (
        <div className='episodeHome'>
            <h1 style={{ textAlign: 'start' }} >Episodes</h1>
            <Swiper

                className='swiper'
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


                    episodes.slice(0, 8).map(episode =>
                        <SwiperSlide key={episode.id} className="smallBox">
                            <p>{episode.episode}</p>

                            <h5>{episode.name}</h5>
                        </SwiperSlide>)

                }
            </Swiper>
        </div>
    );
}

export default Episodes;
