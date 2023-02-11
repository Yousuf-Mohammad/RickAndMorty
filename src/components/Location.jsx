import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

const Location = () => {
    const [location, setLocation] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location')
            .then(res => res.json())
            .then(data => setLocation(data.results));
    }, [])

    return (

        <div>
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


                    location.slice(0, 8).map(loc =>
                        <SwiperSlide key={loc.id} className="charBox">

                            <h1>{loc.name}</h1>
                        </SwiperSlide>)

                }
            </Swiper>
        </div>

    );
}

export default Location;
