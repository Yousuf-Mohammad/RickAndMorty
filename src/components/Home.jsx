import React from 'react';

import Episodes from './Episodes';
import TheCast from './TheCast';
import Top from './Top';
import Location from './Location';


const Home = () => {
    return (
        <div >
            <Top />
            <div className='episodes  '>
                <TheCast />
                <Episodes />
                <Location className='meetCast' />
            </div>
        </div>
    );
}

export default Home;
