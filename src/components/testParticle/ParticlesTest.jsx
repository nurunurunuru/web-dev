/* eslint-disable no-unused-vars */
import React from 'react';
import './Test.css';
import Particles from 'react-tsparticles';
import ParticlesConfig from '../config/ParticlesConfig';

const ParticlesTest = () => {
    return (
        <div className='bg-black w-100 h-100vh'>
            <Particles params={ParticlesConfig} className="particles-bg" />
        </div>
    );
};

export default ParticlesTest;