import React from 'react';
import Episodes from './Episodes';
import TheCast from './TheCast';
import Top from './Top';
import Location from './Location';

const Home = () => {
    return (
        <div>
            <Top />
            <TheCast />
            <Episodes />
            <Location />
        </div>
    );
}

export default Home;
