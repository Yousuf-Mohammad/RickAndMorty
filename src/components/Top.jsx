import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../utils/Home page/Hero Elements/Logo.png'
import rick from '../utils/Home page/Hero Elements/portal.png'
import bubble from '../utils/Home page/Hero Elements/bubble.png'
import pill from '../utils/Home page/Hero Elements/pill.png'
import gun from '../utils/Home page/Hero Elements/Gun.png'
import play from '../utils/Home page/Hero Elements/play-button-28245.png'

const Top = () => {
    return (
        <div className='top' >
            <Link to={'/'} ><img src={logo} height={48} width={227} alt="" /></Link>



            <div>
                <img src={bubble}
                    width='200px'
                    style={{
                        position: 'absolute',
                        zIndex: '1',
                        left: '340px',
                        top: '40px'
                    }} alt="" />
                <img src={gun}
                    width='320px'

                    style={{
                        position: 'absolute',
                        zIndex: '1',
                        right: '160px',
                        top: '200px'
                    }} alt="" />
                <img src={pill}
                    width='50px'
                    style={{
                        position: 'absolute',
                        zIndex: '1',
                        right: '420px',
                        top: '130px'
                    }} alt="" />
                <p >
                    <span className='whiteHeading'>THE</span>
                    <img src={rick} alt="" style={{
                        margin: '10px',
                        marginTop: '-90px',


                    }} /> <span className='gradientHeading'>RICK &</span></p>
                <p>

                    <span className='gradientHeading'>MORTY </span> <span className='whiteHeading'>WIKI</span></p>

            </div>
            <a href="https://www.youtube.com/watch?v=KQ9Cgdsa9tc" className='button'><img src={play} width='30px' height='30px' style={{ marginTop: '5px' }} alt="" /> <span> Watch Now </span></a>


            <p className='paragraph'>Brilliant but boozy scientist Rick hijacks his fretful teenage grandson. Morty , for wild escapades in other world and alternate dimensions</p>
        </div >

    );
}

export default Top;
