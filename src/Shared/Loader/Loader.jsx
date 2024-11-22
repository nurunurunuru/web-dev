/* eslint-disable no-unused-vars */
import React from 'react';
import './Loader.css';
import logo from '../../assets/logo.png';
import Particles from 'react-tsparticles';
import ParticlesConfig from '../../components/config/ParticlesConfig';

console.log("ParticlesConfig in Loader:", ParticlesConfig);

const Loader = () => {
    return (
        <>
            <div className='loader'>
                <div className="loader-box">
                </div>
                <img src={logo} alt="web developers" />
            </div>
        </>
    );
};

export default Loader;