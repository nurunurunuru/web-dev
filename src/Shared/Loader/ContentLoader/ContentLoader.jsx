/* eslint-disable no-unused-vars */
import React from 'react';
import './ContentLoader.css';
import logo from '../../../assets/logo.png';

const ContentLoader = () => {
    return (
        <div>
            <div className='content-loader'>
                <div className="loader-box">
                </div>
                <img src={logo} alt="web developers" />
            </div>
        </div>
    );
};

export default ContentLoader;